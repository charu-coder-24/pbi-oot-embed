import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState = {
    menuItems: [
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
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "c7f3b9e1-6fe4-40c0-b082-f64011bc6697",
            "reportType": "PowerBIReport",
            "name": "CEO Dashboard",
            "webUrl": "https://app.powerbi.com/groups/me/reports/c7f3b9e1-6fe4-40c0-b082-f64011bc6697",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=c7f3b9e1-6fe4-40c0-b082-f64011bc6697&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "4a97cbf2-c176-46c7-b6da-373db4409f6b",
            "users": [],
            "subscriptions": [],
            "sections": []
          }
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
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "2a0a788e-6369-4f34-9786-a50c4dd729b5",
            "reportType": "PowerBIReport",
            "name": "Customer Insights",
            "webUrl": "https://app.powerbi.com/groups/me/reports/2a0a788e-6369-4f34-9786-a50c4dd729b5",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=2a0a788e-6369-4f34-9786-a50c4dd729b5&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "c1c5a5e0-3339-4509-8648-5c9c2dd4f623",
            "users": [],
            "subscriptions": [],
            "sections": []
          },
          {
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "7ba787b6-c83f-4d19-85e1-f71d8e38e1c4",
            "reportType": "PowerBIReport",
            "name": "Demand Forecasting",
            "webUrl": "https://app.powerbi.com/groups/me/reports/7ba787b6-c83f-4d19-85e1-f71d8e38e1c4",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=7ba787b6-c83f-4d19-85e1-f71d8e38e1c4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "5bf7d00a-982e-4dbe-9dd6-457c67aebeb5",
            "users": [],
            "subscriptions": [],
            "sections": []
          },
          {
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "5d3c1641-08e7-4860-86b0-e854de4644df",
            "reportType": "PowerBIReport",
            "name": "Daily Sales",
            "webUrl": "https://app.powerbi.com/groups/me/reports/5d3c1641-08e7-4860-86b0-e854de4644df",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=5d3c1641-08e7-4860-86b0-e854de4644df&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "35a65146-186b-409d-b61d-e2cd75dd2f85",
            "users": [],
            "subscriptions": [],
            "sections": []
          },
          {
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "8087eb2e-42eb-4898-a258-71248caf52c2",
            "reportType": "PowerBIReport",
            "name": "E-Comm Report",
            "webUrl": "https://app.powerbi.com/groups/me/reports/8087eb2e-42eb-4898-a258-71248caf52c2",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=8087eb2e-42eb-4898-a258-71248caf52c2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "d2d3e4db-91a9-447a-8779-cac00b4ca6d7",
            "users": [],
            "subscriptions": [],
            "sections": []
          }
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
            name: "Cash Flow Monitoring",
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
            name: "Expense Analysis",
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
            name: "Probablity Distribution",
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
          }
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
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "8deab412-8600-486f-af5d-e993c50960bb",
            "reportType": "PowerBIReport",
            "name": "Campaign Performance",
            "webUrl": "https://app.powerbi.com/groups/me/reports/8deab412-8600-486f-af5d-e993c50960bb",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=8deab412-8600-486f-af5d-e993c50960bb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "656ac04d-63e6-4f13-8054-a6154f550701",
            "users": [],
            "subscriptions": [],
            "sections": []
          },
          {
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "65ae9bb9-8e17-4c7b-884c-1dfa24478807",
            "reportType": "PowerBIReport",
            "name": "Customer Segmentation",
            "webUrl": "https://app.powerbi.com/groups/me/reports/65ae9bb9-8e17-4c7b-884c-1dfa24478807",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=65ae9bb9-8e17-4c7b-884c-1dfa24478807&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "21af1bcb-fd46-4a5f-9299-b84cef2c4029",
            "users": [],
            "subscriptions": [],
            "sections": []
          },
          {
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "b3941e7f-8c36-425b-b1bf-499916c05160",
            "reportType": "PowerBIReport",
            "name": "Channel Optimization",
            "webUrl": "https://app.powerbi.com/groups/me/reports/b3941e7f-8c36-425b-b1bf-499916c05160",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=b3941e7f-8c36-425b-b1bf-499916c05160&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "6aaa5044-6b00-4855-a121-6b35ea0c24a1",
            "users": [],
            "subscriptions": [],
            "sections": []
          },
          {
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "ff10d907-c6cb-4641-aafb-f733f0671afc",
            "reportType": "PowerBIReport",
            "name": "Portfolio Deep Dive",
            "webUrl": "https://app.powerbi.com/groups/me/reports/ff10d907-c6cb-4641-aafb-f733f0671afc",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=ff10d907-c6cb-4641-aafb-f733f0671afc&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "b2fa6937-bebb-42b9-9e7a-2c69a8697a31",
            "users": [],
            "subscriptions": [],
            "sections": []
          }
        ],
      },
      {
        name: "Supply Chain",
        "subCategories": [
            {
                "name": "Demand Planning",
                "reports": [
                  {
                    "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
                    "id": "57f1ba2f-83e9-4bb4-9028-11ac3512dab0",
                    "reportType": "PowerBIReport",
                    "name": "Forecast Accuracy",
                    "webUrl": "https://app.powerbi.com/groups/me/reports/57f1ba2f-83e9-4bb4-9028-11ac3512dab0",
                    "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=57f1ba2f-83e9-4bb4-9028-11ac3512dab0&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    "isOwnedByMe": true,
                    "datasetId": "d12e298c-4969-469a-b233-404e1ebe36be",
                    "users": [],
                    "subscriptions": [],
                    "sections": []
                  },
                  {
                    "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
                    "id": "d0eb4a62-8dae-4c4f-bc4d-d16d548eaafc",
                    "reportType": "PowerBIReport",
                    "name": "Demand Sensing",
                    "webUrl": "https://app.powerbi.com/groups/me/reports/d0eb4a62-8dae-4c4f-bc4d-d16d548eaafc",
                    "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=d0eb4a62-8dae-4c4f-bc4d-d16d548eaafc&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    "isOwnedByMe": true,
                    "datasetId": "7d924544-4c3f-42a0-a629-bbd157618a5f",
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
                    "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
                    "id": "bf918be0-25d8-4d12-a6ed-320c3d740b0d",
                    "reportType": "PowerBIReport",
                    "name": "Order Fulfillment",
                    "webUrl": "https://app.powerbi.com/groups/me/reports/bf918be0-25d8-4d12-a6ed-320c3d740b0d",
                    "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=bf918be0-25d8-4d12-a6ed-320c3d740b0d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    "isOwnedByMe": true,
                    "datasetId": "67ae59e3-d5e0-4b5d-9432-0428947c5095",
                    "users": [],
                    "subscriptions": [],
                    "sections": []
                  },
                    {
                      "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
                      "id": "dc8b8fa9-9686-4565-819d-392b3498befa",
                      "reportType": "PowerBIReport",
                      "name": "Open Orders",
                      "webUrl": "https://app.powerbi.com/groups/me/reports/dc8b8fa9-9686-4565-819d-392b3498befa",
                      "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=dc8b8fa9-9686-4565-819d-392b3498befa&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                      "isOwnedByMe": true,
                      "datasetId": "a9f0e121-b3ea-4c94-84ff-8bf6008549be",
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
                    "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
                    "id": "5c9cc058-6668-4ee9-9e41-5b76f2d54b11",
                    "reportType": "PowerBIReport",
                    "name": "Inventory Management",
                    "webUrl": "https://app.powerbi.com/groups/me/reports/5c9cc058-6668-4ee9-9e41-5b76f2d54b11",
                    "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=5c9cc058-6668-4ee9-9e41-5b76f2d54b11&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    "isOwnedByMe": true,
                    "datasetId": "8b13cb38-02e4-4c1b-8a50-49d1311dd09f",
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
                    "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
                    "id": "2b3bec8f-deb4-4b31-a665-f0571b078166",
                    "reportType": "PowerBIReport",
                    "name": "Shipments",
                    "webUrl": "https://app.powerbi.com/groups/me/reports/2b3bec8f-deb4-4b31-a665-f0571b078166",
                    "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=2b3bec8f-deb4-4b31-a665-f0571b078166&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    "isOwnedByMe": true,
                    "datasetId": "9c573948-bc59-4efb-872b-5eb60b3875aa",
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
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "142c8903-1031-4ef2-a499-a309443b73ac",
            "reportType": "PowerBIReport",
            "name": "OEE",
            "webUrl": "https://app.powerbi.com/groups/me/reports/142c8903-1031-4ef2-a499-a309443b73ac",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=142c8903-1031-4ef2-a499-a309443b73ac&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "016efe9b-b329-4d8e-9a2c-66b1b18f530a",
            "users": [],
            "subscriptions": [],
            "sections": []
          },
          {
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "bf402553-b915-46c2-b91f-d6f96b36269b",
            "reportType": "PowerBIReport",
            "name": "Production Dashboard",
            "webUrl": "https://app.powerbi.com/groups/me/reports/bf402553-b915-46c2-b91f-d6f96b36269b",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=bf402553-b915-46c2-b91f-d6f96b36269b&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "69a7ba6a-07e6-461b-861a-ee1a28476187",
            "users": [],
            "subscriptions": [],
            "sections": []
          },
          {
            "@odata.context": "https://wabi-us-east2-b-primary-redirect.analysis.windows.net/v1.0/myorg/$metadata#reports/$entity",
            "id": "3787a2d3-2bc8-4c1a-8b9f-adaa3f12eec0",
            "reportType": "PowerBIReport",
            "name": "Quality",
            "webUrl": "https://app.powerbi.com/groups/me/reports/3787a2d3-2bc8-4c1a-8b9f-adaa3f12eec0",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=3787a2d3-2bc8-4c1a-8b9f-adaa3f12eec0&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            "isOwnedByMe": true,
            "datasetId": "362eb226-506d-4c81-b0b3-9e2ac171f7b0",
            "users": [],
            "subscriptions": [],
            "sections": []
          }
        ],
      },
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
