---
title: Weather Endpoints
description: Weather - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: https://github.com/Leaf-Agriculture/Leaf-API-Postman-Collection
[2]: #get-daily-forecast
[3]: #get-hourly-forecast
[4]: #get-daily-historical
[5]: #get-hourly-historical

## About

Here we list all the available endpoints from Weather API. For easily calling them, 
we recommend using [Leaf's Postman collection][1].

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/weather/api
```

This service has the following endpoints available:

| Description                | Endpoints                                                                                                     |
|----------------------------|---------------------------------------------------------------------------------------------------------------|
| [Get Daily Forecast][2]    | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/daily`    |
| [Get Hourly Forecast][3]   | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly`   |
| [Get Daily Historical][4]  | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/daily`  |
| [Get Hourly Historical][5] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/hourly` |

## Endpoints

### Get Daily Forecast

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/daily`

Get daily forecast by leaf user and field. If dates are not set on the endpoint, the response will return 
forecast data for the next seven days.

| Parameter (to filter by)     | values                                                      |
|------------------------------|-------------------------------------------------------------|
| endTime                      | ISO 8601 date. Returns operations until the endTime         |
| startTime                    | ISO 8601 date. Returns operations from the startTime onward |

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/daily'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/daily'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/daily'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "type": "Feature",
  "properties": {
    "maxTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºC"
    },
    "sunrise": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "cm"
    },
    "precipitationSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "maxWindspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "processedTime": "str",
    "rainSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "maxWindgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    },
    "meanTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°C"
    },
    "minTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°C"
    },
    "sunset": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°"
    }
  },
  "geometry": {
    "type": "str",
    "coordinates": [
      0,
      0
    ]
  }
}
```  

### Get Hourly Forecast

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly`

Get hourly forecast by leaf user and field. If dates are not set on the endpoint, the response will return 
forecast data for the next seven days.

| Parameter (to filter by)     | values                                                      |
|------------------------------|-------------------------------------------------------------|
| endTime                      | ISO 8601 date. Returns operations until the endTime         |
| startTime                    | ISO 8601 date. Returns operations from the startTime onward |

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "type": "Feature",
  "properties": {
    "rain": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "dewpoint": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°C"
    },
    "windgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    },
    "snowfall": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "cm"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "shortwaveRadiation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "relativeHumidity": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°C"
    },
    "windspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    }
  },
  "geometry": {
    "type": "str",
    "coordinates": [
      0,
      0
    ]
  }
}
```  

### Get Daily Historical

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/daily`

Get daily historical by leaf user and field. If the dates are not defined in the endpoint, the response will 
return data from the last seven days.

| Parameter (to filter by)     | values                                                      |
|------------------------------|-------------------------------------------------------------|
| endTime                      | ISO 8601 date. Returns operations until the endTime         |
| startTime                    | ISO 8601 date. Returns operations from the startTime onward |

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/daily'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/daily'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/daily'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "type": "Feature",
  "properties": {
    "maxTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºC"
    },
    "sunrise": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "cm"
    },
    "precipitationSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "maxWindspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "processedTime": "str",
    "rainSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "maxWindgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    },
    "meanTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°C"
    },
    "minTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°C"
    },
    "sunset": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°"
    }
  },
  "geometry": {
    "type": "str",
    "coordinates": [
      0,
      0
    ]
  }
}
```  


### Get Hourly Historical

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/hourly`

Get hourly historical by leaf user and field. If the dates are not defined in the endpoint, the response will 
return data from the last seven days.

| Parameter (to filter by)     | values                                                      |
|------------------------------|-------------------------------------------------------------|
| endTime                      | ISO 8601 date. Returns operations until the endTime         |
| startTime                    | ISO 8601 date. Returns operations from the startTime onward |

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/hourly'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/hourly'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/hourly'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "type": "Feature",
  "properties": {
    "rain": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "dewpoint": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°C"
    },
    "windgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    },
    "snowfall": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "cm"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "shortwaveRadiation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mm"
    },
    "relativeHumidity": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°C"
    },
    "windspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "km/h"
    }
  },
  "geometry": {
    "type": "str",
    "coordinates": [
      0,
      0
    ]
  }
}
```  
