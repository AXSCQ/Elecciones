// Datos para el árbol político de Bolivia 2025
import { apbsumate } from './APBSumateTree';
import { alianzapopular } from './APTree';
import { fuerzapueblo } from './FPTree';
import { libre } from './LibreTree';
import { mas } from './MASTree';
import { morena } from './MorenaTree';
import { ngp } from './NGPTree';
import { pdc } from './PDCTree';
import { alianzaunidad } from './UnidadTree';
export const politicalTree = {
  apbsumate,
  mas,
  alianzapopular,
  fuerzapueblo,
  libre,
  morena,
  ngp,
  pdc,
  alianzaunidad,
 
};

// Relaciones entre partidos y alianzas
export const politicalRelations = [
  { source: 'mas', target: 'renovador', type: 'alliance', strength: 'moderate' },
  { source: 'mas', target: 'radical', type: 'alliance', strength: 'moderate' },
  { source: 'mas', target: 'pacto-unidad', type: 'alliance', strength: 'strong' },
  { source: 'cc', target: 'creemos', type: 'alliance', strength: 'moderate' },
  { source: 'libre', target: 'un', type: 'alliance', strength: 'strong' },
  { source: 'mas', target: 'cc', type: 'opposition', strength: 'strong' },
  { source: 'mas', target: 'libre', type: 'opposition', strength: 'strong' },
  { source: 'mas', target: 'un', type: 'opposition', strength: 'strong' },
  { source: 'cc', target: 'libre', type: 'cooperation', strength: 'weak' },
  { source: 'cc', target: 'un', type: 'cooperation', strength: 'weak' },
  { source: 'renovador', target: 'radical', type: 'opposition', strength: 'moderate' }
];
