import "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { H1 } from "./ui/heading";
import { ITEMS } from "./config";
import { mountVideo } from "./video";
import { mountScorm } from "./scorm";

const CONTENT_VIEWER_ID = "content-view";
const IFRAME_CLASSES = "w-[100vw] h-[100vh]";

export const DemoPage = () => {
  const clickItem = (item: (typeof ITEMS)[number]) => {
    if (item.type === "video") {
      mountVideo(item.id, CONTENT_VIEWER_ID);
    } else {
      // scorm
      mountScorm(item.id, CONTENT_VIEWER_ID, IFRAME_CLASSES);
    }
  };

  return (
    <div className="p-8 min-h-[25vh] min-w-[275px]">
      <H1 className="mb-12">SCORM Demo :: LRN</H1>
      <p className="mb-6 pl-4">Click on a card to start learning</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {ITEMS.map((item) => (
          <Card
            key={item.id}
            className="hover:bg-secondary hover:cursor-pointer"
            onClick={() => clickItem(item)}
          >
            <CardHeader>
              <img
                className="mx-auto"
                src={item.thumbnail}
                width={100}
                height={100}
              />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.type}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <section id={CONTENT_VIEWER_ID} className="min-h-[90vh]"></section>
    </div>
  );
};
