      // 1. The basic part of the example
      var L;

      window.onload = function() {
        L.mapquest.key = 'ynpIz6566KmBiofl8GCXUSpPOkvfVNCH';
        

        // 'map' refers to a <div> element with the ID map
        var map = L.mapquest.map('map', {
          center: [53.480759, -2.242631],
          layers: L.mapquest.tileLayer('hybrid'),
          zoom: 12
        });
        
        map.addControl(L.mapquest.control({ position: 'bottomright' }));
        let searchControl = L.mapquest.searchControl({
            className: '',
            hoverMarker: {
              icon: 'marker',
              iconOptions: {
                size: 'sm',
                primaryColor: '#333333',
                secondaryColor: '#333333'
              }
            },
            search: {
              sort: 'relevance',
              pageSize: 20
            },
            searchInput: {
              searchAheadOptions: {
                limit: 6,
                collection: 'address,adminArea,airport,poi,category,franchise'
              },
              compactResults: true,
              placeholderText: 'Search',
              clearTitle: 'Clear search'
            },
            searchLayer: {
              buffer: 256,
              collisionMargin: 2,
              marker: {
                icon: 'via',
                iconOptions: {
                  primaryColor: '#ffffff',
                  secondaryColor: '#333333',
                  size: 'lg'
                },
                popupEnabled: true
              },
              paddingTopLeft: [420, 20],
              paddingBottomRight: [20, 20],
              searchResponse: {},
              updateResultsOnMapMove: true
            }
          }).addTo(map);
      }

      
