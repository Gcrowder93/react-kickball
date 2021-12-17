import client from './client';

export async function getTeams(query) {
  let request = client.from('teams').select(`*, names (*)`).order('teams').limit(100);
  if (query) {
    request = request.ilike('names', `%${query}%`);
  }

  return request;
}

export async function getTeamById(id) {
  return client.from('teams').select(`*, names (*)`).match({ team_id: id }).single();
}
