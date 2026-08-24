Add-Type -AssemblyName System.Drawing
$src = "C:\Users\Samsung\Downloads\WhatsApp Image 2026-08-24 at 11.10.15 PM.jpeg"
$dst = "c:\Users\Samsung\Documents\Erosinc\erosinc-dev\public\team\jas_randhawa.jpg"

$img = [System.Drawing.Image]::FromFile($src)

foreach ($prop in $img.PropertyItems) {
    if ($prop.Id -eq 0x0112) {
        $val = $prop.Value[0]
        if ($val -eq 6) { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
        elseif ($val -eq 8) { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
        elseif ($val -eq 3) { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
    }
}

$origW = $img.Width
$origH = $img.Height

# Crop ~7% from the top headroom to shift the face up, and take square or 4:5 aspect ratio
$cropTop = [int]($origH * 0.065)
$cropBottom = [int]($origH * 0.15)
$newCropH = $origH - $cropTop - $cropBottom
$newCropW = $origW

$cropRect = New-Object System.Drawing.Rectangle(0, $cropTop, $newCropW, $newCropH)

# Create 800x800 square bitmap centered on face
$targetW = 800
$targetH = 800

$bmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Draw cropped area scaled to target
$destRect = New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)
$g.DrawImage($img, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$img.Dispose()
$g.Dispose()

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$param = New-Object System.Drawing.Imaging.EncoderParameters(1)
$param.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 88)

$bmp.Save($dst, $codec, $param)
$bmp.Dispose()

$fileSize = (Get-Item $dst).Length
Write-Host "Successfully adjusted crop and saved $dst ($fileSize bytes)"
