import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState = {
    menuItems: 
    [
      {
          "name": "Home",
          "exact": true,
          "to": "/",
          "iconClassName": "bi bi-speedometer2",
          "component": "Home",
          "subMenus": []
      },
      {
          "name": "Admin",
          "exact": true,
          "to": "/admin/",
          "iconClassName": "bi bi-file-earmark",
          "subMenus": [],
          "component": "Admin"
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
        to: "/report/category/marketing/reportId/*",
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
      }
  ]
    // [  {
    //     name: "Home",
    //     exact: true,
    //     to: "/",
    //     iconClassName: "bi bi-speedometer2",
    //   },
    //   {
    //     name: "OOT",
    //     exact: true,
    //     to: `/report/*`,
    //     iconClassName: "bi bi-file-earmark",
    //     subMenus: [],
    //     component: "Report"
    //   },
      // {
      //   name: "Admin",
      //   exact: true,
      //   to: `/admin/`,
      //   iconClassName: "bi bi-file-earmark",
      //   subMenus: [],
      //   component: "Admin"
      // }
      // {
      //   name: "Executive Dashboard",
      //   exact: true,
      //   to: `/report/executive-dashboard/*`,
      //   iconClassName: "bi bi-file-earmark",
      //   subMenus: [],
      //   component: "Admin"
      // },
      // {
      //   name: "Finance",
      //   exact: true,
      //   to: `/report/finance/*`,
      //   iconClassName: "bi bi-file-earmark",
      //   subMenus: [],
      //   component: "Admin"
      // },
      // {
      //   name: "Sales",
      //   exact: true,
      //   to: `/report/sales/*`,
      //   iconClassName: "bi bi-file-earmark",
      //   subMenus: [],
      //   component: "Admin"
      // },
      // {
      //   name: "Marketting",
      //   exact: true,
      //   to: `/report/marketting/*`,
      //   iconClassName: "bi bi-file-earmark",
      //   subMenus: [],
      //   component: "Admin"
      // },
      // {
      //   name: "Supply Chain",
      //   exact: true,
      //   to: `/report/supply-chain/*`,
      //   iconClassName: "bi bi-file-earmark",
      //   subMenus: [],
      //   component: "Admin"
      // },
      // {
      //   name: "Manufacturing",
      //   exact: true,
      //   to: `/report/manufacturing/*`,
      //   iconClassName: "bi bi-file-earmark",
      //   subMenus: [],
      //   component: "Report"
      // }

      
    // ]
}

export const menuListSlice = createSlice({
    name: 'menuItems',
    initialState,
    reducers: {
        updateMenuList : (state, action) => {
            state.menuItems = action.payload
        }

    }
})

export const {updateMenuList} = menuListSlice.actions 
export  default menuListSlice.reducer
