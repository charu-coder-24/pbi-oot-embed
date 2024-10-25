import { reportsDataDummy } from "../src/datasets/reports";
import axios from "axios";
import * as config from "./Config";
import FormData from "form-data";
import {
  AuthenticationResult,
  InteractionType,
  EventMessage,
  EventType,
  AuthError,
} from "@azure/msal-browser";
// import jwt from 'jsonwebtoken'
import { jwtDecode } from "jwt-decode";

export const menuItemsTest = (menuItems, allReportsData) => {
  let reportsData = allReportsData;
  let menuItem = [
    {
      name: "Home",
      exact: true,
      to: "/",
      iconClassName: "bi bi-speedometer2",
      component: "Home",
      subMenus: [],
    },
    {
      name: "Admin",
      exact: true,
      to: "/admin/",
      iconClassName: "bi bi-file-earmark",
      subMenus: [],
      component: "Admin",
    },
    {
      name: "Executive",
      subCategories: [],
      exact: true,
      to: "/category/Executive/report/*",
      iconClassName: "bi bi-file-earmark",
      component: "Report",
      reports: [
        {
          id: "a01134a2-915a-4b4a-8d79-ba9c2e0ebf90",
          reportType: "PowerBIReport",
          name: "v1.5_Global Dashboard",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/a01134a2-915a-4b4a-8d79-ba9c2e0ebf90",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=a01134a2-915a-4b4a-8d79-ba9c2e0ebf90&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "82d03066-fcad-4f66-9a4d-08ed54683e79",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
      ],
    },
    {
      name: "Sales",
      subCategories: [],
      exact: true,
      to: "/category/Sales/report/*",
      iconClassName: "bi bi-file-earmark",
      component: "Report",
      reports: [
        {
          id: "cfca6fc8-0cf3-4472-b72f-e92b4f8ae713",
          reportType: "PowerBIReport",
          name: "US Sales Analysis",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/cfca6fc8-0cf3-4472-b72f-e92b4f8ae713",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=cfca6fc8-0cf3-4472-b72f-e92b4f8ae713&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "87e94aa4-da3c-4b9f-99f0-a2def6ed1494",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "f1f84fe6-fbf9-4ed4-8a32-a7d986bcd0c6",
          reportType: "PowerBIReport",
          name: "Supply Chain Sample",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/f1f84fe6-fbf9-4ed4-8a32-a7d986bcd0c6",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=f1f84fe6-fbf9-4ed4-8a32-a7d986bcd0c6&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "d786cc57-751d-4719-96d6-56eb0eeadfe7",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "9a3b9438-63a4-417c-a593-786e59c5f5da",
          reportType: "PowerBIReport",
          name: "Sales & Returns Sample",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/9a3b9438-63a4-417c-a593-786e59c5f5da",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=9a3b9438-63a4-417c-a593-786e59c5f5da&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "1675982d-ec77-49b8-9e03-fa6f62a7156e",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
      ],
    },
    {
      name: "Finance",
      subCategories: [],
      exact: true,
      to: "/category/finance/report/*",
      iconClassName: "bi bi-file-earmark",
      component: "Report",
      reports: [
        {
          id: "cacddc90-61b5-4cc6-b018-1f4785b97094",
          reportType: "PowerBIReport",
          name: "Human Resources Sample PBIX",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/cacddc90-61b5-4cc6-b018-1f4785b97094",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=cacddc90-61b5-4cc6-b018-1f4785b97094&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "e21f9ccd-454d-4249-9c31-2746a1de0d08",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "d4558ade-26d8-4fb6-8646-5e0c14e77d01",
          reportType: "PowerBIReport",
          name: "Untitled report",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/d4558ade-26d8-4fb6-8646-5e0c14e77d01",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=d4558ade-26d8-4fb6-8646-5e0c14e77d01&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: false,
          isOwnedByMe: true,
          datasetId: "888e455c-b719-41d0-ba3e-81174e39516d",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "053548c2-20d2-42d5-bac4-a34a3b0fd6c2",
          reportType: "PowerBIReport",
          name: "Project Sunlight Safety Performance (Charu)",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/053548c2-20d2-42d5-bac4-a34a3b0fd6c2",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=053548c2-20d2-42d5-bac4-a34a3b0fd6c2&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "e807493b-06fe-4318-995c-94b686747141",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "3baf7644-a20b-4280-9b0c-d67c3d4b1399",
          reportType: "PowerBIReport",
          name: "Project Sunlight Safety Performance multilangual",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/3baf7644-a20b-4280-9b0c-d67c3d4b1399",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=3baf7644-a20b-4280-9b0c-d67c3d4b1399&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "4c14efde-0313-4e31-910a-00e10dc1313b",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
      ],
    },
    {
      name: "Marketing",
      subCategories: [],
      exact: true,
      to: "/category/marketing/report/*",
      iconClassName: "bi bi-file-earmark",
      component: "Report",
      reports: [
        {
          id: "f6e3e1d8-cd1e-45e6-a9d7-2579b3b006b7",
          reportType: "PowerBIReport",
          name: "Project Sunlight Safety Performance multilangual(copy)",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/f6e3e1d8-cd1e-45e6-a9d7-2579b3b006b7",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=f6e3e1d8-cd1e-45e6-a9d7-2579b3b006b7&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "73a121c9-0462-40cf-96ec-0effcc492f3f",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "d6f6dd7d-6726-4d2c-9671-08bef70efafa",
          reportType: "PowerBIReport",
          name: "Project Sunlight Safety Performance multilangual V1.1 pbix",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/d6f6dd7d-6726-4d2c-9671-08bef70efafa",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=d6f6dd7d-6726-4d2c-9671-08bef70efafa&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "02c51735-6843-4e8c-9543-a9569b488da3",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "dc3649f7-3de7-4c47-9472-d6b8281834bb",
          reportType: "PowerBIReport",
          name: "Project Sunlight Safety Performance multilangual V1.2 pbix",
          webUrl:
            "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/dc3649f7-3de7-4c47-9472-d6b8281834bb",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=dc3649f7-3de7-4c47-9472-d6b8281834bb&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "80712502-0143-46e9-8d2d-6c638d5912f4",
          datasetWorkspaceId: "6cceba03-8d48-4e74-a924-fd93b2b03656",
          users: [],
          subscriptions: [],
          sections: [],
        },
      ],
    },
    {
      name: "Supply Chain",
      "subCategories": [
          {
              "name": "Demand Planning",
              "reports": [
                  {
                      "id": "9a3b9438-63a4-417c-a593-786e59c5f5da",
                      "reportType": "PowerBIReport",
                      "name": "Sales & Returns Sample",
                      "webUrl": "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/9a3b9438-63a4-417c-a593-786e59c5f5da",
                      "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=9a3b9438-63a4-417c-a593-786e59c5f5da&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                      "isFromPbix": true,
                      "isOwnedByMe": true,
                      "datasetId": "1675982d-ec77-49b8-9e03-fa6f62a7156e",
                      "datasetWorkspaceId": "6cceba03-8d48-4e74-a924-fd93b2b03656",
                      "users": [],
                      "subscriptions": [],
                      "sections": []
                  },
                  {
                      "id": "cacddc90-61b5-4cc6-b018-1f4785b97094",
                      "reportType": "PowerBIReport",
                      "name": "Human Resources Sample PBIX",
                      "webUrl": "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/cacddc90-61b5-4cc6-b018-1f4785b97094",
                      "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=cacddc90-61b5-4cc6-b018-1f4785b97094&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                      "isFromPbix": true,
                      "isOwnedByMe": true,
                      "datasetId": "e21f9ccd-454d-4249-9c31-2746a1de0d08",
                      "datasetWorkspaceId": "6cceba03-8d48-4e74-a924-fd93b2b03656",
                      "users": [],
                      "subscriptions": [],
                      "sections": []
                  }
              ],
              "exact": true,
              "to": "/report/",
              "iconClassName": "bi bi-file-earmark",
              "component": "Report",
              "isOpen": false
          },
          {
              "name": "Supply Planning",
              "reports": [
                  {
                      "id": "d6f6dd7d-6726-4d2c-9671-08bef70efafa",
                      "reportType": "PowerBIReport",
                      "name": "Project Sunlight Safety Performance multilangual V1.1 pbix",
                      "webUrl": "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/d6f6dd7d-6726-4d2c-9671-08bef70efafa",
                      "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=d6f6dd7d-6726-4d2c-9671-08bef70efafa&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                      "isFromPbix": true,
                      "isOwnedByMe": true,
                      "datasetId": "02c51735-6843-4e8c-9543-a9569b488da3",
                      "datasetWorkspaceId": "6cceba03-8d48-4e74-a924-fd93b2b03656",
                      "users": [],
                      "subscriptions": [],
                      "sections": []
                  },
                  {
                      "id": "dc3649f7-3de7-4c47-9472-d6b8281834bb",
                      "reportType": "PowerBIReport",
                      "name": "Project Sunlight Safety Performance multilangual V1.2 pbix",
                      "webUrl": "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/dc3649f7-3de7-4c47-9472-d6b8281834bb",
                      "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=dc3649f7-3de7-4c47-9472-d6b8281834bb&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                      "isFromPbix": true,
                      "isOwnedByMe": true,
                      "datasetId": "80712502-0143-46e9-8d2d-6c638d5912f4",
                      "datasetWorkspaceId": "6cceba03-8d48-4e74-a924-fd93b2b03656",
                      "users": [],
                      "subscriptions": [],
                      "sections": []
                  }
              ],
              "exact": true,
              "to": "/report/",
              "iconClassName": "bi bi-file-earmark",
              "component": "Report",
              "isOpen": false
          },
          {
              "name": "Warehouse",
              "reports": [
                  {
                      "id": "3baf7644-a20b-4280-9b0c-d67c3d4b1399",
                      "reportType": "PowerBIReport",
                      "name": "Project Sunlight Safety Performance multilangual",
                      "webUrl": "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/3baf7644-a20b-4280-9b0c-d67c3d4b1399",
                      "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=3baf7644-a20b-4280-9b0c-d67c3d4b1399&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                      "isFromPbix": true,
                      "isOwnedByMe": true,
                      "datasetId": "4c14efde-0313-4e31-910a-00e10dc1313b",
                      "datasetWorkspaceId": "6cceba03-8d48-4e74-a924-fd93b2b03656",
                      "users": [],
                      "subscriptions": [],
                      "sections": []
                  }
              ],
              "exact": true,
              "to": "/report/",
              "iconClassName": "bi bi-file-earmark",
              "component": "Report",
              "isOpen": false
          },
          {
              "name": "Logistics",
              "reports": [
                  {
                      "id": "3787a2d3-2bc8-4c1a-8b9f-adaa3f12eec0",
                      "reportType": "PowerBIReport",
                      "name": "PBI Report_Datamart",
                      "webUrl": "https://app.powerbi.com/groups/6cceba03-8d48-4e74-a924-fd93b2b03656/reports/3787a2d3-2bc8-4c1a-8b9f-adaa3f12eec0",
                      "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=3787a2d3-2bc8-4c1a-8b9f-adaa3f12eec0&groupId=6cceba03-8d48-4e74-a924-fd93b2b03656&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                      "isFromPbix": false,
                      "isOwnedByMe": true,
                      "datasetId": "362eb226-506d-4c81-b0b3-9e2ac171f7b0",
                      "datasetWorkspaceId": "6cceba03-8d48-4e74-a924-fd93b2b03656",
                      "users": [],
                      "subscriptions": [],
                      "sections": []
                  }
              ],
              "exact": true,
              "to": "/report/",
              "iconClassName": "bi bi-file-earmark",
              "component": "Report",
              "isOpen": false
          }
      ],
      exact: true,
      to: "/category/supply-chain/report/*",
      iconClassName: "bi bi-file-earmark",
      component: "Report",
      reports: []
    },
    {
      name: "Manufacturing",
      subCategories: [],
      exact: true,
      to: "/category/manufacturing/report/*",
      iconClassName: "bi bi-file-earmark",
      component: "Report",
      reports: [
        {
          id: "b835e582-d82c-49d7-974b-74f6a7ed2489",
          reportType: "PowerBIReport",
          name: "Sales & Returns Sample v201912 (1)",
          webUrl:
            "https://app.powerbi.com/groups/d4dd5a98-5179-441f-bc14-50bf616d258f/reports/b835e582-d82c-49d7-974b-74f6a7ed2489",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=b835e582-d82c-49d7-974b-74f6a7ed2489&groupId=d4dd5a98-5179-441f-bc14-50bf616d258f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "af35d88c-989a-414d-b4d0-7b3eb1e49371",
          datasetWorkspaceId: "d4dd5a98-5179-441f-bc14-50bf616d258f",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "0fd75bfb-c2a8-4006-9eec-ac831db6a7e7",
          reportType: "PowerBIReport",
          name: "Questionnaire Form POCs",
          webUrl:
            "https://app.powerbi.com/groups/d4dd5a98-5179-441f-bc14-50bf616d258f/reports/0fd75bfb-c2a8-4006-9eec-ac831db6a7e7",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=0fd75bfb-c2a8-4006-9eec-ac831db6a7e7&groupId=d4dd5a98-5179-441f-bc14-50bf616d258f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "f40a3315-741b-4f08-8539-b196284ceaf0",
          datasetWorkspaceId: "d4dd5a98-5179-441f-bc14-50bf616d258f",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "5ed6fcb8-6c62-4147-9592-34cc8d3e519a",
          reportType: "PowerBIReport",
          name: "MS Forms Questionnaire Test Auto Refresh",
          webUrl:
            "https://app.powerbi.com/groups/d4dd5a98-5179-441f-bc14-50bf616d258f/reports/5ed6fcb8-6c62-4147-9592-34cc8d3e519a",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=5ed6fcb8-6c62-4147-9592-34cc8d3e519a&groupId=d4dd5a98-5179-441f-bc14-50bf616d258f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "8dbc4a5e-78ba-47d3-9231-4c06f76254d7",
          datasetWorkspaceId: "d4dd5a98-5179-441f-bc14-50bf616d258f",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "b833f43b-7a7f-49ff-abb3-892c12b8563a",
          reportType: "PowerBIReport",
          name: "MS Form Questionnaire POC",
          webUrl:
            "https://app.powerbi.com/groups/d4dd5a98-5179-441f-bc14-50bf616d258f/reports/b833f43b-7a7f-49ff-abb3-892c12b8563a",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=b833f43b-7a7f-49ff-abb3-892c12b8563a&groupId=d4dd5a98-5179-441f-bc14-50bf616d258f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "8a22a06d-728d-4821-896c-2cd5f27b60dd",
          datasetWorkspaceId: "d4dd5a98-5179-441f-bc14-50bf616d258f",
          users: [],
          subscriptions: [],
          sections: [],
        },
        {
          id: "bbd6fe0c-a78e-4f2c-ae75-e543440aea5c",
          reportType: "PowerBIReport",
          name: "Project Sunlight Safety Performance (1)",
          webUrl:
            "https://app.powerbi.com/groups/d4dd5a98-5179-441f-bc14-50bf616d258f/reports/bbd6fe0c-a78e-4f2c-ae75-e543440aea5c",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=bbd6fe0c-a78e-4f2c-ae75-e543440aea5c&groupId=d4dd5a98-5179-441f-bc14-50bf616d258f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          isFromPbix: true,
          isOwnedByMe: true,
          datasetId: "d5ec9123-ce5b-4c03-b00f-4d8619629a0a",
          datasetWorkspaceId: "d4dd5a98-5179-441f-bc14-50bf616d258f",
          users: [],
          subscriptions: [],
          sections: [],
        },
      ],
    },
  ];
  //  [
  //   {
  //     name: "Home",
  //     exact: true,
  //     to: "/",
  //     iconClassName: "bi bi-speedometer2",
  //     component: "Home",
  //     subMenus: []
  //   },
  //   {  name: "Admin",
  //   exact: true,
  //   to: `/admin/`,
  //   iconClassName: "bi bi-file-earmark",
  //   subMenus: [],
  //   component: "Admin"
  // }
  // {
  //   name: "Executive Dashboard",
  //   exact: true,
  //   to: `/category/executive-dashboard/report/*`,
  //   iconClassName: "bi bi-file-earmark",
  //   subMenus: [],
  //   component: "Report"
  // },
  // {
  //   name: "Finance",
  //   exact: true,
  //   to: `/category/finance/report/*`,
  //   iconClassName: "bi bi-file-earmark",
  //   subMenus: [],
  //   component: "Report"
  // },
  // {
  //   name: "Sales",
  //   exact: true,
  //   to: `/category/sales/report/*`,
  //   iconClassName: "bi bi-file-earmark",
  //   subMenus: [],
  //   component: "Report"
  // },
  // {
  //   name: "Marketting",
  //   exact: true,
  //   to: `/category/marketting/report/*`,
  //   iconClassName: "bi bi-file-earmark",
  //   subMenus: [],
  //   component: "Report"
  // },
  // {
  //   name: "Supply Chain",
  //   exact: true,
  //   to: `/category/supply-chain/report/*`,
  //   iconClassName: "bi bi-file-earmark",
  //   subMenus: [],
  //   component: "Report"
  // },
  // {
  //   name: "Manufacturing",
  //   exact: true,
  //   to: `/category/manufacturing/report/*`,
  //   iconClassName: "bi bi-file-earmark",
  //   subMenus: [],
  //   component: "Report"
  // }

  // { name: "Dashboard", to: `/dashboard`, iconClassName: "bi bi-view-stacked", component: "Dashboard", subMenus:[] }
  // ];
  let reportSubMenu = reportsData?.map((key, index) => {
    let obj = {
      name: key.name,
      to: `/category/${key.name}`,
    };
    return obj;
  });

  // let updatedMenuItemList = menuItem
  // updatedMenuItemList.splice(2, 0,
  //   {
  //     name: "OOT",
  //     exact: true,
  //     to: `/category/report/*`,
  //     iconClassName: "bi bi-file-earmark",
  //     subMenus: reportSubMenu,
  //     testArray: [{
  //       "name" : "NAC",
  //       "report" : reportSubMenu,
  //       "subCategories" : []
  //     }],
  //     component: "Report"
  //   }
  // )

  return reportsData?.length > 0 ? menuItem : menuItem;
};

export const login = () => {
  const axios = require("axios");
  let data =
    "client_id=18fbca16-2224-45f6-85b0-f7bf2b39b3f3&scope=https%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi%2F.default%20openid%20profile%20offline_access&grant_type=refresh_token&client_info=1&x-client-SKU=msal.js.browser&x-client-VER=2.32.2&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|61,0,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=bd49270c-3b6c-4545-b711-d813fc16d138&refresh_token=0.ATUAlxxRAj2I0ESX5PcmzTpnaxbK-xgkIvZFhbD3vys5s_M1AKo.AgABAAEAAAAmoFfGtYxvRrNriQdPKIZ-AgDs_wUA9P-s2WDGEU1HESZ49ZRfePF5f0K-1Pm3ze_by0RnH_KSrlFfhnh0-vAX9quK5fyMJE3IUoQF53_7JMWovp6busRZIlfQmYE-rSZbZPCQTkZUbLRzegXXHCcQfz0VwHnjI11Gaqf0BC8cQMK5bwpLDVNxZo2aONEUlxX4BV1IsQgInBqIlR0yBcE8bngMQ60LvOolYvklIwlzwZxGHvn6lzs-18si3ZMNgTmDHkRUtLz1ONtJJowZF8Pan5ciWkm7pAgDRvoottYu2ir4a31cGp5LHaU6SJYiA--U_yt68DMnM_kN90hx5Jvxe_lXHQeJh1TL36hSmogZCVSMEm-DfevjvbyMy9_YPUUZzKZ5xETO9g96gf8Ap8rGK7euexdwg9omYkb2bjS2-DaE4FnX5YayED4hrmFkDWXg6raKbdOCWZnxIuyprapaHkiFzu7PGcBlow5EqJPfWQvzpMyXc9a3FXhKHs-j0usZwq9Q0K6IC_3Yj3cFRxccfXD6LGUlQF0iFHkWLCHLkNADJoC7XhCjxGeYGZyZOyJANq_vNv3KwQE1S_KcY_VQm41kjB41blEN2fr6cmT7pG5qgI-_a3IIikHMfpG3zkYL-zWURR4r8fVOT8zD4QBUyU_dqivYrb11qP-D32lXTL6PjCtBKXfaoASyyTbqpXWkd7TA2RPsUQm2zA3OvZcMKbZmeVoEO9tdb_aJtD7t4pYRMAlw90rEMAGleIxCdN11uvs3iFbasuR4xTvi6Raj2LnRgyKCYwL_8nI997baqE-1-W0cpkDotknbyZ6L4hjLVYxeOTwkscy6uMws4Jz3f6DWODw57XTMPDuge1ezt_xbmQlwm-XUD8HGxNsHB1O4Z-kTs9WVDJ7X1i50ObR3LPiV7B5mI3wz5YjHktNCYM11PawOHuTerKDtzhwYB4mQYyYIKyWakmdWEdKTTinGm-TGAWV296vBGOjH911-QrO5qhZ3ZX-x";

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://login.microsoftonline.com/02511c97-883d-44d0-97e4-f726cd3a676b/oauth2/v2.0/token",
    headers: {
      Accept: "*/report/*",
      "Accept-Language": "en-US,en;q=0.9",
      Connection: "keep-alive",
      Origin: "https://learn.microsoft.com",
      Referer: "https://learn.microsoft.com/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "sec-ch-ua":
        '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      Cookie:
        "buid=0.ATUAlxxRAj2I0ESX5PcmzTpna6aqWkfztfdGrUZUgrDfpqA1AAA.AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-o117MfTVUe4ISD290PwmUXT-18vl2MOb7LmLnGxbJUu7u-lW4lpstxt8Vy_30QR739p08Zkd15n7RI1g6KgpWZiw10UH4DFzLNzTBA22IPkgAA; esctx=PAQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-wkcUhpQwCYwl7yAwk8zVrxwvuUFSDf3VCeIb41gxzArdEntaJDrPv41p7VdKYPgzlCL0Lu6eKpES-jIukR5jcjLk-IDARw6plD2cq5fParAMTysi3JtL3zQrMOgd8Cm46fdviQTKJwfR5GZXaamPoHSX9pLSJZNAswqb0Yh41fggAA; esctx-9Gbuin5eWYE=AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-BHwLfXztr1-RhmkxFmRSjH5ESR1-BusbCfo0oRysQIqPWvpLftbTBdTK3yjEa_2C17A_8re6HBPvK2gQqsxEeUrCugfivuhpkFaaRjr7xvuEGgWCUoTyUKh4uRStwNq06ZZSkXk4uTRr2fhAWZj6-iAA; esctx-HBUsR2yQyC0=AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-FnM0M9X3JceDPhTgKbZ4lYr71Rry7Z4YXCb7LTd9UfGZIsSt6XyG6fJmq42IO-ZSLn0srz8NUyb2TB1mtKruRGDc_BCmx3VhHvPQj1Ll1Bf5ORnXem1mwd1tAg2NxuUlJrpNTW5mOu7P1AdXkPzDMiAA; esctx-Iu6BiNQYQJs=AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-M67ZptO4-fGhOQLI7ZK1SCPj40gW4GHdQpijQK3ItS-hcwBE_27V281PF7yXtUcZYVtGsAbbopH-sqeI5LG3cGhRIixwMKl1fByZ-ENrhj-orW9JGcEWPlnb_EZS0My-Bv0olNdVebTgTtdZtXuRKiAA; esctx-irTZP1z0UM4=AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-EGKsXORCWAFqy0ZfA92m8lxg64bsy7gV_5Qf4pL0FpAQRpH_fPk_GnhVVTKDOo-ARakfb6GbNA--Eo1IiiK1K8W4PRBJvn_SYzNGHbzvi_jRX3R5949IGofAtXUnNHMgJQHVv3dzVth_yriwTV2QjCAA; fpc=AvRfHCHVhjlFiudn6pynQdAdBwNVAQAAAM5m5dwOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      sessionStorage.setItem("access_token", response.data.access_token);
      generateEmbedToken();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const generateEmbedToken = () => {
  const axios = require("axios");
  let data = JSON.stringify({
    datasets: [
      {
        id: "d786cc57-751d-4719-96d6-56eb0eeadfe7",
      },
      {
        id: "87e94aa4-da3c-4b9f-99f0-a2def6ed1494",
      },
      {
        id: "1675982d-ec77-49b8-9e03-fa6f62a7156e",
      },
    ],
    reports: [
      {
        allowEdit: true,
        id: "f1f84fe6-fbf9-4ed4-8a32-a7d986bcd0c6",
      },
      {
        allowEdit: true,
        id: "cfca6fc8-0cf3-4472-b72f-e92b4f8ae713",
      },
      {
        allowEdit: true,
        id: "9a3b9438-63a4-417c-a593-786e59c5f5da",
      },
    ],
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.powerbi.com/v1.0/myorg/GenerateToken",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      sessionStorage.setItem("embed_token", response.data.token);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllReports = (workspaceId) => {
  // console.log("isTokenExpired", isTokenExpired)
  // console.log("checking expiry", isTokenExpired())
  const axios = require("axios");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.powerbi.com/v1.0/myorg/groups/${
      workspaceId ? workspaceId : "6cceba03-8d48-4e74-a924-fd93b2b03656"
    }/reports`,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    },
  };

  return axios
    .request(config)
    .then((response) => {
      console.log("actual report res", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMyOrgWorkspaces = () => {
  // console.log("accessToken from embed url", accessToken)
  // setTokenState({ accessToken: accessToken, embedUrl: embedUrl })
  const access_token = sessionStorage.getItem("access_token");
  return fetch(config.powerBiApiUrl + "v1.0/myorg/groups", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    },
    method: "GET",
  })
    .then(function (response) {
      const errorMessage = [];
      errorMessage.push(
        "Error occurred while fetching the embed URL of the report"
      );
      errorMessage.push("Request Id: " + response.headers.get("requestId"));

      return response
        .json()
        .then(function (body) {
          if (response.ok) {
            var embedUrl = body["embedUrl"];

            console.log("just checking after that", body.value);
            return body.value;
          } else {
            errorMessage.push(
              "Error " + response.status + ": " + body.error.code
            );
            return errorMessage;
          }
        })
        .catch(function () {
          errorMessage.push(
            "Error " + response.status + ":  An error has occurred"
          );
          return errorMessage;
        });
    })
    .catch(function (error) {
      return error;
    });
};

export const getReportEmbedUrl = () => {
  // const thisObj = this;
  // console.log("accessToken from embed url", accessToken)
  // setTokenState({ accessToken: accessToken, embedUrl: embedUrl })
  const accessToken = sessionStorage.getItem("access_token");
  fetch(
    config.powerBiApiUrl +
      "v1.0/myorg/groups/" +
      config.workspaceId +
      "/reports/" +
      config.reportId,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      method: "GET",
    }
  )
    .then(function (response) {
      const errorMessage = [];
      errorMessage.push(
        "Error occurred while fetching the embed URL of the report"
      );
      errorMessage.push("Request Id: " + response.headers.get("requestId"));
      console.log("checking response actually ", response);

      response
        .json()
        .then(function (body) {
          if (response.ok) {
            var embedUrl = body["embedUrl"];
            // thisObj.setTokenState({ accessToken: accessToken, embedUrl: embedUrl });

            console.log("just checking after that", accessToken, embedUrl);
          } else {
            errorMessage.push(
              "Error " + response.status + ": " + body.error.code
            );
            return { error: errorMessage };
          }
        })
        .catch(function () {
          errorMessage.push(
            "Error " + response.status + ":  An error has occurred"
          );
          return { error: errorMessage };
        });
    })
    .catch(function (error) {
      return { error: error };
    });
};

export const getAllWorkspaces = () => {
  const axios = require("axios");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.powerbi.com/v1.0/myorg/groups",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    },
  };

  return axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });
};

export const workspacesDummy = () => {
  let data = [
    {
      id: "6cceba03-8d48-4e74-a924-fd93b2b03656",
      isReadOnly: false,
      isOnDedicatedCapacity: true,
      capacityId: "223390BC-21CB-4E88-B2BC-B0FD3CAF17F5",
      defaultDatasetStorageFormat: "Small",
      type: "Workspace",
      name: "PBIEmbedded",
    },
    {
      id: "d4dd5a98-5179-441f-bc14-50bf616d258f",
      isReadOnly: false,
      isOnDedicatedCapacity: false,
      type: "Workspace",
      name: "Test1",
    },
  ];
  return data;
};

export const isTokenExpired = () => {
  let token = sessionStorage.getItem("access_token") || null;
  console.log("token cheks", token);
  // const decodedToken = jwt.decode(token, { complete: true });
  // const token =
  // JSON.parse(localStorage.getItem("user")) &&
  // JSON.parse(localStorage.getItem("user"))["token"];

  if (token == null) {
    return true;
  } else {
    if (jwtDecode(token).exp < Date.now() / 1000) {
      // console.log("expired token")
      sessionStorage.setItem("isTokenExpired", true);
      return true;
      // next(action);
      // localStorage.clear();
    } else {
      sessionStorage.setItem("isTokenExpired", true);
      return false;
    }
  }
  // Check if the token has expired
  // if (decodedToken && decodedToken.payload.exp) {
  //     const currentTimestamp = Math.floor(Date.now() / 1000);
  //     if (decodedToken.payload.exp > currentTimestamp) {
  //         console.log('Token is not expired');
  //     } else {
  //         console.log('Token has expired');
  //     }
  // } else {
  //     console.log('Invalid token format');
  // }
};

export const tokentest = () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "fpc=Al4z7wyR4P9CgNBUuuZ7A8AzK-jKAQAAANDgLd0OAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd"
  );

  var formdata = new FormData();
  formdata.append("grant_type", "client_credentials");
  formdata.append("client_id", "475aaaa6-b5f3-46f7-ad46-5482b0dfa6a0");
  formdata.append("client_secret", "17o8Q~OG~dMD5yY3tlLfCl_IvF4il6E2MIRJ5czN");
  formdata.append("resource", "https://analysis.windows.net/powerbi/api");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://login.windows.net/02511c97-883d-44d0-97e4-f726cd3a676b/oauth2/token",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const authenticateToken = (
  instance,
  accounts,
  inProgress,
  tokenState
) => {
  console.log(
    "inside authenticateToken func",
    instance,
    accounts,
    inProgress,
    tokenState
  );
  const msalInstance = instance;
  const msalAccounts = accounts;
  const msalInProgress = inProgress;
  const isAuthenticated = accounts?.length > 0;
  var accessToken = "";
  var setUsername = "";
  var embedUrl = "";

  if (tokenState?.error?.length > 0) {
    return;
  }

  const eventCallback = msalInstance.addEventCallback((message) => {
    if (message.eventType === EventType.LOGIN_SUCCESS && !accessToken) {
      const payload = message.payload;
      const name = payload.account?.name ? payload.account?.name : "";

      accessToken = payload.accessToken;
      console.log("inside eventcallback", accessToken);
      sessionStorage.setItem("access_token", accessToken);

      // setUsername(name);
      tryRefreshUserPermissions();
    }
  });

  const loginRequest = {
    scopes: config.scopeBase,
    account: msalAccounts[0],
  };

  if (!isAuthenticated && msalInProgress === InteractionType.None) {
    msalInstance.loginRedirect(loginRequest);
    console.log("inside 1st conditiom", accessToken);
  } else if (isAuthenticated && accessToken && !embedUrl) {
    // getembedUrl();
    msalInstance.removeEventCallback(eventCallback);
    sessionStorage.setItem("access_token", accessToken);
    console.log("inside 2nd conditiom", accessToken);
  } else if (
    isAuthenticated &&
    !accessToken &&
    !embedUrl &&
    msalInProgress === InteractionType.None
  ) {
    // setUsername(msalAccounts[0].name);

    // get access token silently from cached id-token
    msalInstance
      .acquireTokenSilent(loginRequest)
      .then((response) => {
        accessToken = response.accessToken;
        console.log("inside token silently conditiom", accessToken);
        sessionStorage.setItem("access_token", response.accessToken);
        // getembedUrl();
      })
      .catch((error) => {
        if (
          error.errorCode === "consent_required" ||
          error.errorCode === "interaction_required" ||
          error.errorCode === "login_required"
        ) {
          msalInstance.acquireTokenRedirect(loginRequest);
        } else if (error.errorCode === "429") {
          return {
            error: [
              "Our Service Token Server (STS) is overloaded, please try again in sometime",
            ],
          };
        } else {
          return {
            error: [
              "There was some problem fetching the access token" +
                error.toString(),
            ],
          };
        }
      });
  }
};

export const tryRefreshUserPermissions = () => {
  const accessToken = sessionStorage.getItem("access_token");
  fetch(config.powerBiApiUrl + "v1.0/myorg/RefreshUserPermissions", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    method: "POST",
  })
    .then(function (response) {
      if (response.ok) {
        console.log("User permissions refreshed successfully.");
      } else {
        if (response.status === 429) {
          console.error(
            "Permissions refresh will be available in up to an hour."
          );
        } else {
          console.error(response);
        }
      }
    })
    .catch(function (error) {
      console.error("Failure in making API call." + error);
    });
};
