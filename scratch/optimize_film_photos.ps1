Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\Samsung\Documents\film\celeb photo"
$destDir = "c:\Users\Samsung\Documents\Erosinc\erosinc-dev\public\film"

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

$files = Get-ChildItem -Path $srcDir | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|JPG|JPEG|PNG)$' } | Sort-Object Name
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]88)

$index = 1
foreach ($file in $files) {
    $outName = ("celeb_{0:D2}.jpg" -f $index)
    $outPath = Join-Path $destDir $outName
    
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        # Check and handle EXIF Orientation
        if ($img.PropertyIdList -contains 274) {
            $prop = $img.GetPropertyItem(274)
            $orient = [BitConverter]::ToUInt16($prop.Value, 0)
            switch ($orient) {
                1 { } # Normal
                2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                4 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
            # Remove orientation tag after rotating so it doesn't rotate twice
            try { $img.RemovePropertyItem(274) } catch {}
        }
        
        $maxDim = 1600
        $w = $img.Width
        $h = $img.Height
        
        if ($w -gt $maxDim -or $h -gt $maxDim) {
            if ($w -gt $h) {
                $newW = $maxDim
                $newH = [int]($h * ($maxDim / $w))
            } else {
                $newH = $maxDim
                $newW = [int]($w * ($maxDim / $h))
            }
        } else {
            $newW = $w
            $newH = $h
        }
        
        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $g.DrawImage($img, 0, 0, $newW, $newH)
        $g.Dispose()
        $img.Dispose()
        
        $bmp.Save($outPath, $encoder, $encoderParams)
        $bmp.Dispose()
        
        Write-Output ("Processed [{0:D2}/33]: {1} -> {2} ({3}x{4})" -f $index, $file.Name, $outName, $newW, $newH)
        $index++
    } catch {
        Write-Error ("Failed to process {0}: {1}" -f $file.FullName, $_)
    }
}

Write-Output "All images processed with EXIF auto-rotation into $destDir"
