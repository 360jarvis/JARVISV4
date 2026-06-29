import { apiOk } from '../../../../lib/apiResponse';
import { getDatabaseStatus } from '../../../../lib/db';

export async function GET() {
  return apiOk(getDatabaseStatus());
}
