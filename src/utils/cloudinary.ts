const CLOUDINARY_UPLOAD_SEGMENT = "res.cloudinary.com";

// Pide a Cloudinary formato moderno (f_auto), calidad automática y ancho máximo.
export function optimizeImageUrl(url: string, width: number): string {
  if (!url.includes(CLOUDINARY_UPLOAD_SEGMENT)) return url;
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
}
