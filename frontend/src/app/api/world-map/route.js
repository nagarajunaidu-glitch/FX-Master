import fs from 'fs';
import path from 'path';

export async function GET() {
  const sourcePath = 'C:/Users/svpku/.gemini/antigravity-ide/brain/d59c7ded-fb00-49ca-9db2-797c2d43b9d0/world_map_vector_1791287811388.jpg';
  const targetPublicPath = path.join(process.cwd(), 'public', 'world-map.jpg');
  
  try {
    if (fs.existsSync(sourcePath)) {
      const fileBuffer = fs.readFileSync(sourcePath);
      if (!fs.existsSync(targetPublicPath)) {
        fs.writeFileSync(targetPublicPath, fileBuffer);
      }
      return new Response(fileBuffer, {
        headers: {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      });
    }
  } catch (err) {
    console.error('Error loading world map asset:', err);
  }
  
  return new Response('Not found', { status: 404 });
}
