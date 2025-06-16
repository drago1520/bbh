import * as migration_20250607_235517 from './20250607_235517';
import * as migration_20250609_133312 from './20250609_133312';
import * as migration_20250609_135856 from './20250609_135856';
import * as migration_20250609_230456 from './20250609_230456';
import * as migration_20250615_060852 from './20250615_060852';
import * as migration_20250615_102924 from './20250615_102924';
import * as migration_20250616_224956 from './20250616_224956';

export const migrations = [
  {
    up: migration_20250607_235517.up,
    down: migration_20250607_235517.down,
    name: '20250607_235517',
  },
  {
    up: migration_20250609_133312.up,
    down: migration_20250609_133312.down,
    name: '20250609_133312',
  },
  {
    up: migration_20250609_135856.up,
    down: migration_20250609_135856.down,
    name: '20250609_135856',
  },
  {
    up: migration_20250609_230456.up,
    down: migration_20250609_230456.down,
    name: '20250609_230456',
  },
  {
    up: migration_20250615_060852.up,
    down: migration_20250615_060852.down,
    name: '20250615_060852',
  },
  {
    up: migration_20250615_102924.up,
    down: migration_20250615_102924.down,
    name: '20250615_102924',
  },
  {
    up: migration_20250616_224956.up,
    down: migration_20250616_224956.down,
    name: '20250616_224956'
  },
];
