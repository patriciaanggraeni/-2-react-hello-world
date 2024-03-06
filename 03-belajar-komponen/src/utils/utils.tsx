export function getImageUrl(imageId: string, size = 's') {
    return (
      'https://i.imgur.com/' + imageId + size + '.jpg'
    );
}

export function getImageUrlV2(person: any, size: number) {
  return (
    'https://i.imgur.com/' + person.imageId + size + '.jpg'
  );
}