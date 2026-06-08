ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([559582.877200, 1491225.522831, 759481.015346, 1665231.562304]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DATA_P_1 = new ol.format.GeoJSON();
var features_DATA_P_1 = format_DATA_P_1.readFeatures(json_DATA_P_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_DATA_P_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATA_P_1.addFeatures(features_DATA_P_1);
var lyr_DATA_P_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DATA_P_1, 
                style: style_DATA_P_1,
                popuplayertitle: 'DATA_P',
                interactive: true,
                title: '<img src="styles/legend/DATA_P_1.png" /> DATA_P'
            });
var lyr_ar_project_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ar_project<br />\
    <img src="styles/legend/ar_project_2_0.png" /> <= 658.13<br />\
    <img src="styles/legend/ar_project_2_1.png" /> 658.13 - 697.10<br />\
    <img src="styles/legend/ar_project_2_2.png" /> 697.10 - 735.69<br />\
    <img src="styles/legend/ar_project_2_3.png" /> 735.69 - 793.77<br />\
    <img src="styles/legend/ar_project_2_4.png" /> > 793.77<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ar_project_2.png",
            attributions: ' ',
            projection: 'EPSG:32643',
            alwaysInRange: true,
            imageExtent: [607062.519546, 1500067.200424, 720405.880070, 1663833.272664]
        })
    });
var format_CHITRADURGA_3 = new ol.format.GeoJSON();
var features_CHITRADURGA_3 = format_CHITRADURGA_3.readFeatures(json_CHITRADURGA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_CHITRADURGA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHITRADURGA_3.addFeatures(features_CHITRADURGA_3);
var lyr_CHITRADURGA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHITRADURGA_3, 
                style: style_CHITRADURGA_3,
                popuplayertitle: 'CHITRADURGA',
                interactive: false,
                title: '<img src="styles/legend/CHITRADURGA_3.png" /> CHITRADURGA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DATA_P_1.setVisible(true);lyr_ar_project_2.setVisible(true);lyr_CHITRADURGA_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DATA_P_1,lyr_ar_project_2,lyr_CHITRADURGA_3];
lyr_DATA_P_1.set('fieldAliases', {'Id': 'Id', 'OBJECTID': 'OBJECTID', 'AR': 'AR', 'RR': 'RR', 'DI': 'DI', 'STREAM_F': 'STREAM_F', 'DD': 'DD', 'TRI': 'TRI', 'TWI': 'TWI', });
lyr_CHITRADURGA_3.set('fieldAliases', {'District': 'District', 'STATE': 'STATE', 'REMARKS': 'REMARKS', 'State_LGD': 'State_LGD', 'DISTRICT_L': 'DISTRICT_L', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DATA_P_1.set('fieldImages', {'Id': 'TextEdit', 'OBJECTID': 'TextEdit', 'AR': 'TextEdit', 'RR': 'TextEdit', 'DI': 'TextEdit', 'STREAM_F': 'TextEdit', 'DD': 'TextEdit', 'TRI': 'TextEdit', 'TWI': 'TextEdit', });
lyr_CHITRADURGA_3.set('fieldImages', {'District': 'TextEdit', 'STATE': 'TextEdit', 'REMARKS': 'TextEdit', 'State_LGD': 'TextEdit', 'DISTRICT_L': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DATA_P_1.set('fieldLabels', {'Id': 'hidden field', 'OBJECTID': 'hidden field', 'AR': 'inline label - visible with data', 'RR': 'hidden field', 'DI': 'hidden field', 'STREAM_F': 'hidden field', 'DD': 'hidden field', 'TRI': 'hidden field', 'TWI': 'hidden field', });
lyr_CHITRADURGA_3.set('fieldLabels', {'District': 'hidden field', 'STATE': 'hidden field', 'REMARKS': 'hidden field', 'State_LGD': 'hidden field', 'DISTRICT_L': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_CHITRADURGA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});