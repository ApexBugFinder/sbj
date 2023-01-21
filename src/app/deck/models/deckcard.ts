export interface DeckCard {
  id: Number;
  deck_id: Number;
  face: String;
  suite: String;
  h_value: Number;
  l_value: Number;
  value: Number;
  url: String;
  used: Boolean;
}

export const defaultDeckCard: DeckCard = {
  id: 1,
  deck_id: 1,
  face: 'T1',
  suite: 'Test',
  h_value: 5,
  l_value: 5,
  value: 5,
  url: 'https://firebasestorage.googleapis.com/v0/b/resourcery-6cdb0.appspot.com/o/sb21%2Fimages%2FArtwork%2010.png?alt=media&token=2c358a5a-fb24-4094-9ddb-1759cbf66bf7',
  used: false,
};
