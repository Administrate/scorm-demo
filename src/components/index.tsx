import "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { H1 } from "./ui/heading";

export const DemoPage = () => {
  return (
    <div className="p-8">
      <H1 className="mb-8">SCORM Demo :: LRN</H1>
      <Card className="min-w-[300px] w-36">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Embedded Content Player Demo</CardDescription>
          <CardContent>
            <p>Believe it when you see it.</p>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};
