import React from 'react';
import { Props } from '../utils/types';


const ClientOnly:React.FC<Props> = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <React.Fragment {...delegated}>{children}</React.Fragment>;
};

export default ClientOnly;