import { ImSpinner8 } from 'react-icons/im';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="text-center">
        <ImSpinner8 className="h-16 w-16 animate-spin text-primary" />
        <p className="mt-4 text-lg font-medium text-foreground">Loading...</p>
      </div>
    </div>
  );
}
