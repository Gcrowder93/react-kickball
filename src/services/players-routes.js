import { client, checkError } from './client';

export async function fetchPlayers() {
  let request = await client.from('players').select().order('name');

  return checkError(request);
}

export async function getPlayerById(id) {
  let request = await client.from('players').select().match({ id }).single();

  return request;
}
