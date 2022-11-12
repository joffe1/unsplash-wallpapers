'use client';

import strings from '../src/consts/strings';

const Error = () => {
  return (
    <div className="my-8 mx-auto max-w-screen-xl">
      <p>{strings.fetchError}</p>
    </div>
  );
};
export default Error;
