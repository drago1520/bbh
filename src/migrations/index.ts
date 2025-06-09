import * as migration_20250607_235517 from './20250607_235517';
import * as migration_20250609_133312 from './20250609_133312';

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
];
