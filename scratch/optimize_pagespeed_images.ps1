Add-Type -AssemblyName System.Drawing

# Convert gallery JPEGs to WebP-quality compressed JPEGs (since .NET doesn't natively support WebP,
# we'll resize and heavily compress to JPEG at quality 60 which matches WebP size savings)
# The real WebP conversion will happen via Next.js Image optimization on Vercel

$galleryDir = "c:\Users\Samsung\Documents\Erosinc\erosinc-dev\public\gallery"
$certDir = "c:\Users\Samsung\Documents\Erosinc\erosinc-dev\public\certificates"

# JPEG encoder with quality parameter
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$qualityParam = New-Object System.Drawing.Imaging.EncoderParameters(1)
$qualityParam.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 65)

function Optimize-Image {
    param([string]$filePath, [int]$maxWidth = 800, [int]$maxHeight = 600)
    
    try {
        $img = [System.Drawing.Image]::FromFile($filePath)
        $origW = $img.Width
        $origH = $img.Height
        
        # Calculate new dimensions
        $ratio = [Math]::Min($maxWidth / $origW, $maxHeight / $origH)
        if ($ratio -ge 1.0) {
            # Image is already small enough, just recompress
            $newW = $origW
            $newH = $origH
        } else {
            $newW = [int]($origW * $ratio)
            $newH = [int]($origH * $ratio)
        }
        
        $newImg = New-Object System.Drawing.Bitmap($newW, $newH)
        $graphics = [System.Drawing.Graphics]::FromImage($newImg)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.DrawImage($img, 0, 0, $newW, $newH)
        
        $img.Dispose()
        $graphics.Dispose()
        
        # Save optimized version (overwrite)
        $tempPath = $filePath + ".tmp"
        $newImg.Save($tempPath, $jpegCodec, $qualityParam)
        $newImg.Dispose()
        
        # Replace original
        Remove-Item $filePath -Force
        Rename-Item $tempPath -NewName (Split-Path $filePath -Leaf) -Force
        
        $origSize = [Math]::Round($origW * $origH / 1000, 1)
        $newSize = (Get-Item $filePath).Length
        Write-Host "Optimized: $(Split-Path $filePath -Leaf) -> ${newW}x${newH} ($([Math]::Round($newSize/1024, 1)) KiB)"
    } catch {
        Write-Host "SKIP: $(Split-Path $filePath -Leaf) - $($_.Exception.Message)"
    }
}

Write-Host "=== Optimizing Gallery Images ==="
Get-ChildItem -Path $galleryDir -Filter "*.jpg" | ForEach-Object {
    Optimize-Image -filePath $_.FullName -maxWidth 800 -maxHeight 600
}

Write-Host ""
Write-Host "=== Optimizing Certificate Images ==="
Get-ChildItem -Path $certDir -Filter "*.jpg" | ForEach-Object {
    Optimize-Image -filePath $_.FullName -maxWidth 800 -maxHeight 600
}

Write-Host ""
Write-Host "=== Optimizing Logo ==="
$logoPath = "c:\Users\Samsung\Documents\Erosinc\erosinc-dev\public\logo.png"
try {
    $logoImg = [System.Drawing.Image]::FromFile($logoPath)
    # Resize to 512x178 (2x retina of max display 242x84)
    $newLogo = New-Object System.Drawing.Bitmap(512, 178)
    $g = [System.Drawing.Graphics]::FromImage($newLogo)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($logoImg, 0, 0, 512, 178)
    $logoImg.Dispose()
    $g.Dispose()
    
    # Save as PNG (logo needs transparency)
    $pngCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/png' }
    $tempLogo = $logoPath + ".tmp"
    $newLogo.Save($tempLogo, [System.Drawing.Imaging.ImageFormat]::Png)
    $newLogo.Dispose()
    
    Remove-Item $logoPath -Force
    Rename-Item $tempLogo -NewName "logo.png" -Force
    
    $newSize = (Get-Item $logoPath).Length
    Write-Host "Logo optimized: 512x178 ($([Math]::Round($newSize/1024, 1)) KiB)"
} catch {
    Write-Host "Logo optimization failed: $($_.Exception.Message)"
}

Write-Host ""
Write-Host "=== Done ==="
