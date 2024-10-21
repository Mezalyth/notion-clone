"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk as ConvexClerkProvider } from "convex/react-clerk"; // Renamed imported provider
import { ClerkProvider, useAuth } from "@clerk/clerk-react";

// Initialize the Convex client
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Custom provider that wraps Clerk and Convex
export const ConvexClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexClerkProvider useAuth={useAuth} client={convex}>
        {children}
      </ConvexClerkProvider>
    </ClerkProvider>
  );
};
