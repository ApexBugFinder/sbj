    export interface Hand {
      id: Number,
      status: String,
      player_limit: Number,
      h_value: Number,
      l_value: Number,
      user_id: Number
};


export const defaultHand: Hand = {
  id: 1,
  status: 'ACTIVE',
  player_limit: 0,
  h_value: 5,
  l_value: 5,
  user_id: 1
};
