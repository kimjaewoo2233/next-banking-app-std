import clsx from "clsx";
import { ClassValue } from "clsx";
import queryString from "query-string";
import { twMerge } from "tailwind-merge";


interface UrlQueryParams {
    params: string;
    key: string;
    value: string;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formUrlQuery({ params, key, value}: UrlQueryParams){
    const currentUrl = queryString.parse(params); // URL 파라미터 객체로 변환
    currentUrl[key] = value;

    return queryString.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl
        },
        {
            skipNull: true //value가 null인거 생략시킴
        }
    )
}

export function formatAmount(amount: number): string {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });

    return formatter.format(amount);
}

export function getAccountTypeColors(type: AccountTypes) {
    switch (type) {
      case "depository":
        return {
          bg: "bg-blue-25",
          lightBg: "bg-blue-100",
          title: "text-blue-900",
          subText: "text-blue-700",
        };
  
      case "credit":
        return {
          bg: "bg-success-25",
          lightBg: "bg-success-100",
          title: "text-success-900",
          subText: "text-success-700",
        };
  
      default:
        return {
          bg: "bg-green-25",
          lightBg: "bg-green-100",
          title: "text-green-900",
          subText: "text-green-700",
        };
    }
}


  