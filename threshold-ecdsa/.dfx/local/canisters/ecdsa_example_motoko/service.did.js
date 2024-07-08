export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'public_key' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Record({ 'public_key_hex' : IDL.Text }),
            'Err' : IDL.Text,
          }),
        ],
        [],
      ),
    'sign' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({ 'signature_hex' : IDL.Text }),
            'Err' : IDL.Text,
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
