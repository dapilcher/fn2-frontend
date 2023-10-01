import React from 'react';

const PrettyJSON = ({data, ...rest}) => {
  return (
    <div {...rest}>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default PrettyJSON;