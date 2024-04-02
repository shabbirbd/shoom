"use client";

import { useUser } from "@clerk/nextjs";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();

  return (
    
  );
};

export default Meeting;
