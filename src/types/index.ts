type commonFileds = {
  id?: string;
  Created_at?: string;
};

export const statusArray = ["Draft", "sent", "archive"];
type TstatusArrray = (typeof statusArray)[number];

export const EmailStatus = ["Draft", "completed"];
type TEmailStatus = (typeof EmailStatus)[number];

export const SubscriberStatus = ["active", "notactive", "completed"];
type TSubscriberStatus = (typeof SubscriberStatus)[number];
export type compaing = {
  name: string;
  from: string | undefined;
  subject: string | undefined;
  user_id?: string | undefined;
  email_id?: string | undefined;
  status: TstatusArrray | undefined;
} & commonFileds;

export type email = {
  title: string;
  content: string;
  emailStatus: TEmailStatus;
} & commonFileds;
export type subscriber = {
  email: string;
  oner_id: string;
  SubscriberStatus: TSubscriberStatus;
} & commonFileds;
export type user = {
  email: string;
} & commonFileds;
