import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  H1,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "./ui";
import { ITEMS } from "./config";
import { mountVideo } from "./video";
import { mountScorm } from "./scorm";
import { useState } from "react";

const CONTENT_VIEWER_ID = "content-view";
const IFRAME_CLASSES = "w-[100vw] h-[100vh]";

const LOADING_CHOICES = ["default", "text", "html", "template"] as const;
type LoadingStateChoice = (typeof LOADING_CHOICES)[number];

const upperFirst = (x: string) => `${x[0]!.toUpperCase()}${x.substring(1)}`;

export const DemoPage = () => {
  const [loadingState, setLoadingState] =
    useState<LoadingStateChoice>("default");

  const clickItem = (item: (typeof ITEMS)[number]) => {
    if (item.type === "video") {
      mountVideo(item.id, CONTENT_VIEWER_ID);
    } else {
      mountScorm(item.id, CONTENT_VIEWER_ID, IFRAME_CLASSES);
    }
  };

  return (
    <div className="p-8 min-h-[25vh] min-w-[275px]">
      <H1 className="mb-12">SCORM Demo :: LRN</H1>
      <p className="mb-6 pl-4">Click on a card to start learning</p>

      <div className="my-6 pl-6">
        <p>Select Custom SCORM Loading UI</p>
        <RadioGroup
          defaultValue="default"
          onValueChange={(v) => setLoadingState(v as LoadingStateChoice)}
          className="pl-6 my-4"
        >
          {LOADING_CHOICES.map((choice) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={choice}
                id={`load:${choice}`}
                className="peer"
              />
              <Label
                className="hover:cursor-pointer hover-underline peer-hover:underline"
                htmlFor={`load:${choice}`}
              >
                {upperFirst(choice)}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ITEMS.map((item) => (
          <Card
            key={item.id}
            className="hover:bg-secondary hover:cursor-pointer"
            onClick={() => clickItem(item)}
          >
            <CardHeader className="relative">
              <img
                className="absolute top-0 right-0 h-[75px] border-l-2 border-b-2 border-violet-700 border-tr-lg"
                src={item.thumbnail}
                height={75}
              />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.type}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <section id={CONTENT_VIEWER_ID} className="min-h-[90vh] mt-24"></section>
    </div>
  );
};
