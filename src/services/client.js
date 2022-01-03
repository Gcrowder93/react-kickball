import { createClient } from '@supabase/supabase-js';

export const client = createClient(
  'https://aiyxnrgpggpknnsjjiva.supabase.co',

  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzYxMTI5NywiZXhwIjoxOTUzMTg3Mjk3fQ.hkuahEbhWLwR85szXNjRv4mrF2l2E7Gx8WfIy_oWdJ0'
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
