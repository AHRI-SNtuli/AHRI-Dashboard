var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Izigodi_Population_1 = new ol.format.GeoJSON();
var features_Izigodi_Population_1 = format_Izigodi_Population_1.readFeatures(json_Izigodi_Population_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Izigodi_Population_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Izigodi_Population_1.addFeatures(features_Izigodi_Population_1);
var lyr_Izigodi_Population_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Izigodi_Population_1, 
                style: style_Izigodi_Population_1,
                popuplayertitle: 'Izigodi_Population',
                interactive: true,
    title: 'Izigodi_Population<br />\
    <img src="styles/legend/Izigodi_Population_1_0.png" /> 108 - 318<br />\
    <img src="styles/legend/Izigodi_Population_1_1.png" /> 318 - 504<br />\
    <img src="styles/legend/Izigodi_Population_1_2.png" /> 504 - 690<br />\
    <img src="styles/legend/Izigodi_Population_1_3.png" /> 690 - 848<br />\
    <img src="styles/legend/Izigodi_Population_1_4.png" /> 848 - 2564<br />' });
var format_HealthFacilities_2 = new ol.format.GeoJSON();
var features_HealthFacilities_2 = format_HealthFacilities_2.readFeatures(json_HealthFacilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthFacilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthFacilities_2.addFeatures(features_HealthFacilities_2);
var lyr_HealthFacilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthFacilities_2, 
                style: style_HealthFacilities_2,
                popuplayertitle: 'Health Facilities',
                interactive: true,
                title: '<img src="styles/legend/HealthFacilities_2.png" /> Health Facilities'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Izigodi_Population_1.setVisible(true);lyr_HealthFacilities_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Izigodi_Population_1,lyr_HealthFacilities_2];
lyr_Izigodi_Population_1.set('fieldAliases', {'Name': 'Name', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CODE': 'CODE', 'Population': 'Population', });
lyr_HealthFacilities_2.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Number': 'Number', 'Name_of_cl': 'Name_of_cl', 'Name_of_si': 'Name_of_si', 'Name_desig': 'Name_desig', 'Telephone_': 'Telephone_', 'Areas_isig': 'Areas_isig', 'Q__24_hour': 'Q__24_hour', 'Ambulance_': 'Ambulance_', 'Antenatal_': 'Antenatal_', 'If_yes_no_': 'If_yes_no_', 'Delivery_s': 'Delivery_s', 'If_yes_n00': 'If_yes_n00', 'Postnatal_': 'Postnatal_', 'Well_baby_': 'Well_baby_', 'Family_pla': 'Family_pla', 'If_yes_n01': 'If_yes_n01', 'Waiting_mo': 'Waiting_mo', 'TasP_Names': 'TasP_Names', });
lyr_Izigodi_Population_1.set('fieldImages', {'Name': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CODE': 'TextEdit', 'Population': 'TextEdit', });
lyr_HealthFacilities_2.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Number': 'Range', 'Name_of_cl': 'TextEdit', 'Name_of_si': 'TextEdit', 'Name_desig': 'TextEdit', 'Telephone_': 'TextEdit', 'Areas_isig': 'TextEdit', 'Q__24_hour': 'TextEdit', 'Ambulance_': 'TextEdit', 'Antenatal_': 'TextEdit', 'If_yes_no_': 'TextEdit', 'Delivery_s': 'TextEdit', 'If_yes_n00': 'TextEdit', 'Postnatal_': 'TextEdit', 'Well_baby_': 'TextEdit', 'Family_pla': 'TextEdit', 'If_yes_n01': 'TextEdit', 'Waiting_mo': 'TextEdit', 'TasP_Names': 'TextEdit', });
lyr_Izigodi_Population_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'PERIMETER': 'inline label - visible with data', 'CODE': 'no label', 'Population': 'inline label - visible with data', });
lyr_HealthFacilities_2.set('fieldLabels', {'Longitude': 'no label', 'Latitude': 'no label', 'Number': 'no label', 'Name_of_cl': 'inline label - visible with data', 'Name_of_si': 'no label', 'Name_desig': 'no label', 'Telephone_': 'no label', 'Areas_isig': 'no label', 'Q__24_hour': 'no label', 'Ambulance_': 'no label', 'Antenatal_': 'no label', 'If_yes_no_': 'no label', 'Delivery_s': 'no label', 'If_yes_n00': 'no label', 'Postnatal_': 'no label', 'Well_baby_': 'no label', 'Family_pla': 'no label', 'If_yes_n01': 'no label', 'Waiting_mo': 'no label', 'TasP_Names': 'no label', });
lyr_HealthFacilities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});