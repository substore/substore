import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Block, Card, Text, Flex, BadgeDelta, Metric  } from '@tremor/react';

const Home: NextPage = () => {
  const router = useRouter()
  const user = 'user123';

  useEffect(() => {
    if (!user) {
      router.push
    }
  }, [user, router])

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        {user && (
          <h2 className="italic">Substore </h2>
      )}
    </div>
  </div>
  );
}
  
export default Home;