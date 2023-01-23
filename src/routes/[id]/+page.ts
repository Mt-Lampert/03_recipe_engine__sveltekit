import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  if (params.id.length !== 0) {
    return {
      id: params.id,
    };
  }

  // implicit else
  throw error(404, 'Oops! Not found!');
}) satisfies PageLoad;
