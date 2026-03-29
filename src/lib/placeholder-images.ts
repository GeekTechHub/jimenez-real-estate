
import data from './placeholder-images.json';

// Importaciones estáticas para imágenes locales en src/assets/images/
// Nota: Next.js optimiza estas imágenes automáticamente al ser importadas así.
import banner from '@/assets/images/banner.png';
import droneCristal from '@/assets/images/drone_cristal.jpeg';
import fachadaCoral from '@/assets/images/fachada_coral.png';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string | any;
  imageHint: string;
};

// Mapeamos los datos del JSON pero inyectamos los objetos de imagen reales para los IDs correspondientes
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.map(img => {
  if (img.id === 'hero-punta-cana') return { ...img, imageUrl: banner };
  if (img.id === 'project-cristal') return { ...img, imageUrl: droneCristal };
  if (img.id === 'office-storefront') return { ...img, imageUrl: fachadaCoral };
  return img;
});
