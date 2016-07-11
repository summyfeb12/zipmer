Inspiration
Not every farmer has all the machines necessary for every crop, the machines are too pricey and heavy. It is only during the particular crop time specific machinery is needed and they can be borrowed from farmers nearby or agricultural companies nearby to avoid the shipping costs.

What it does
It visualizes the crops that are currently being produced in a particular region and the user can choose to overlay the equipment availability information of 9 different machines like tractors, combines etc and chek out the equipment needed. Once he orders it he can also see the shipping details and status of the equipment.

How we built it
We used the Climate Corporation API to provide the overall crop data on a map in the shape of polygons and every crop is shown using a color. We then used the JohnDeere's Machine API to overlap the information of 9 different machines on various locations on a map using the leaflet.js and mapbox libraries.

Challenges we ran into
The climate corporation API was letting us define the fields but to the level of exact acres, it did not allow us to have data over cities, so we modeled for a particular field and scaled that up so that it would essentially represent cities together in total.

Accomplishments that we're proud of
We were able to have multiple layers on the map, each layer having one equipment, this gives user the freedom to select individual equipment or combinations as required. We made the UI farmer friendly, we consider this a major accomplishment.

What we learned
Node.js, Team work, New Teammates, new workarounds and the list goes on.....

What's next for AgroRentals
Since we are confident that this application is solving an industry problem, we would like to come up with a service that helps majority of farmers across the globe.
