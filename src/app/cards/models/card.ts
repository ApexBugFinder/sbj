export interface Card {
  id: number;
  face: string;
  suite: string;
  l_value: number;
  h_value: number;
  url: string;

}

export const defaultCard: Card = {
  id: 1,
  face: 'T2',
  suite: 'Test',
  l_value: 5,
  h_value: 5,
  url: 'https://firebasestorage.googleapis.com/v0/b/resourcery-6cdb0.appspot.com/o/sb21%2Fimages%2FArtwork%2010.png?alt=media&token=2c358a5a-fb24-4094-9ddb-1759cbf66bf7',
};
