var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_Planimetrareferencial_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planimetría referencial<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planimetrareferencial_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8176363.403009, -4471520.448008, -8175162.364556, -4470860.667299]
        })
    });
var format_Colector_3 = new ol.format.GeoJSON();
var features_Colector_3 = format_Colector_3.readFeatures(json_Colector_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colector_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_3.addFeatures(features_Colector_3);
var lyr_Colector_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_3, 
                style: style_Colector_3,
                popuplayertitle: 'Colector',
                interactive: false,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_3_0.png" /> CON CARGA<br />\
    <img src="styles/legend/Colector_3_1.png" /> SIN CARGA (VARILLABLE)<br />' });
var format_Cmara_4 = new ol.format.GeoJSON();
var features_Cmara_4 = format_Cmara_4.readFeatures(json_Cmara_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cmara_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_4.addFeatures(features_Cmara_4);
var lyr_Cmara_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_4, 
                style: style_Cmara_4,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_4_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Cmara_4_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_4_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_4_3.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_4_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_4_5.png" /> SIN ACCESO<br />' });
var format_PEAS_5 = new ol.format.GeoJSON();
var features_PEAS_5 = format_PEAS_5.readFeatures(json_PEAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAS_5.addFeatures(features_PEAS_5);
var lyr_PEAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEAS_5, 
                style: style_PEAS_5,
                popuplayertitle: 'PEAS',
                interactive: true,
                title: '<img src="styles/legend/PEAS_5.png" /> PEAS'
            });
var format_DescargaASRioTubul_6 = new ol.format.GeoJSON();
var features_DescargaASRioTubul_6 = format_DescargaASRioTubul_6.readFeatures(json_DescargaASRioTubul_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DescargaASRioTubul_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DescargaASRioTubul_6.addFeatures(features_DescargaASRioTubul_6);
var lyr_DescargaASRioTubul_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DescargaASRioTubul_6, 
                style: style_DescargaASRioTubul_6,
                popuplayertitle: 'Descarga AS Rio Tubul',
                interactive: true,
                title: '<img src="styles/legend/DescargaASRioTubul_6.png" /> Descarga AS Rio Tubul'
            });
var format_PuntodeInters_7 = new ol.format.GeoJSON();
var features_PuntodeInters_7 = format_PuntodeInters_7.readFeatures(json_PuntodeInters_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntodeInters_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntodeInters_7.addFeatures(features_PuntodeInters_7);
var lyr_PuntodeInters_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntodeInters_7, 
                style: style_PuntodeInters_7,
                popuplayertitle: 'Punto de Interés',
                interactive: true,
                title: '<img src="styles/legend/PuntodeInters_7.png" /> Punto de Interés'
            });
var group_ObservacionesdeTerreno = new ol.layer.Group({
                                layers: [lyr_DescargaASRioTubul_6,lyr_PuntodeInters_7,],
                                fold: 'open',
                                title: 'Observaciones de Terreno'});
var group_RedAS = new ol.layer.Group({
                                layers: [lyr_Colector_3,lyr_Cmara_4,lyr_PEAS_5,],
                                fold: 'open',
                                title: 'Red AS'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_Planimetrareferencial_2.setVisible(true);lyr_Colector_3.setVisible(true);lyr_Cmara_4.setVisible(true);lyr_PEAS_5.setVisible(true);lyr_DescargaASRioTubul_6.setVisible(true);lyr_PuntodeInters_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_Planimetrareferencial_2,group_RedAS,group_ObservacionesdeTerreno];
lyr_Colector_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', 'TIPO': 'TIPO', 'MATERIALIDAD': 'MATERIALIDAD', });
lyr_Cmara_4.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'DIAMETRO SALIDA 1': 'DIAMETRO SALIDA 1', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', 'COMUNA': 'COMUNA', 'PROFUNDIDAD ENTRADA 1': 'PROFUNDIDAD ENTRADA 1', 'PROFUNDIDAD ENTRADA 2': 'PROFUNDIDAD ENTRADA 2', 'PROFUNDIDAD ENTRADA 3': 'PROFUNDIDAD ENTRADA 3', 'PROFUNDIDAD ENTRADA 4': 'PROFUNDIDAD ENTRADA 4', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'TERRENO INACCESIBLE': 'TERRENO INACCESIBLE', 'RECINTO PARTICULAR O VIVIENDA': 'RECINTO PARTICULAR O VIVIENDA', 'CAMARA NUEVA': 'CAMARA NUEVA', 'REQUIERE LIMPIEZA': 'REQUIERE LIMPIEZA', 'DUDA?': 'DUDA?', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'NAPA': 'NAPA', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'E (m) RTK': 'E (m) RTK', 'N (m) RTK': 'N (m) RTK', 'ELEV (m) RTK': 'ELEV (m) RTK', 'PROFUNDIDAD (m) RTK': 'PROFUNDIDAD (m) RTK', 'COTA ANILLO (m) RTK': 'COTA ANILLO (m) RTK', 'COTA FONDO (m) RTK': 'COTA FONDO (m) RTK', 'DIAMETRO SALIDA 3': 'DIAMETRO SALIDA 3', 'ESCURRIMIENTO': 'ESCURRIMIENTO', 'UBICACION REFERENCIAL': 'UBICACION REFERENCIAL', 'OBSERVACIONES UBICACION': 'OBSERVACIONES UBICACION', 'OBSERVACIONES CONEXIONES': 'OBSERVACIONES CONEXIONES', });
lyr_PEAS_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDENTIFICADORELEMENTO': 'IDENTIFICADORELEMENTO', 'SUBTYPE': 'SUBTYPE', 'NOMBRE': 'NOMBRE', 'MEDIDORCAUDAL': 'MEDIDORCAUDAL', 'CONFIGURACION': 'CONFIGURACION', 'GOLPE_ARIETE': 'GOLPE_ARIETE', 'SUBESTACION': 'SUBESTACION', 'VENTILACION': 'VENTILACION', 'IZAMIENTO': 'IZAMIENTO', 'SISTEMA_REBALSE': 'SISTEMA_REBALSE', 'ESTADO': 'ESTADO', 'OBSERVACION': 'OBSERVACION', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'DESCRIPCION': 'DESCRIPCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', });
lyr_DescargaASRioTubul_6.set('fieldAliases', {'fid': 'fid', 'DESCRIPCION': 'DESCRIPCION', });
lyr_PuntodeInters_7.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'DESCRIPCION': 'DESCRIPCION', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', 'HALLAZGO 3': 'HALLAZGO 3', });
lyr_Colector_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'Range', 'CAMARA_INICIO': 'TextEdit', 'CAMARA_FINAL': 'TextEdit', 'OBSERVACIONES': 'TextEdit', 'TIPO': 'TextEdit', 'MATERIALIDAD': 'TextEdit', });
lyr_Cmara_4.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'DIAMETRO ENTRADA 1': 'ValueMap', 'DIAMETRO ENTRADA 2': 'ValueMap', 'DIAMETRO ENTRADA 3': 'ValueMap', 'DIAMETRO ENTRADA 4': 'ValueMap', 'DIAMETRO ENTRADA 5': 'ValueMap', 'DIAMETRO SALIDA 1': 'ValueMap', 'DIAMETRO SALIDA 2': 'ValueMap', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', 'COMUNA': 'TextEdit', 'PROFUNDIDAD ENTRADA 1': 'TextEdit', 'PROFUNDIDAD ENTRADA 2': 'TextEdit', 'PROFUNDIDAD ENTRADA 3': 'TextEdit', 'PROFUNDIDAD ENTRADA 4': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'FALLA ESTRUCTURAL': 'CheckBox', 'TERRENO INACCESIBLE': 'CheckBox', 'RECINTO PARTICULAR O VIVIENDA': 'CheckBox', 'CAMARA NUEVA': 'CheckBox', 'REQUIERE LIMPIEZA': 'CheckBox', 'DUDA?': 'CheckBox', 'ESTADO CANAL': 'ValueMap', 'ESTADO BANQUETA': 'ValueMap', 'NAPA': 'ValueMap', 'EMBANCAMIENTO': 'ValueMap', 'ESTADO ESCALINES': 'ValueMap', 'E (m) RTK': 'TextEdit', 'N (m) RTK': 'TextEdit', 'ELEV (m) RTK': 'TextEdit', 'PROFUNDIDAD (m) RTK': 'TextEdit', 'COTA ANILLO (m) RTK': 'TextEdit', 'COTA FONDO (m) RTK': 'TextEdit', 'DIAMETRO SALIDA 3': 'ValueMap', 'ESCURRIMIENTO': 'ValueMap', 'UBICACION REFERENCIAL': 'ValueMap', 'OBSERVACIONES UBICACION': 'TextEdit', 'OBSERVACIONES CONEXIONES': 'TextEdit', });
lyr_PEAS_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'IDENTIFICADORELEMENTO': 'TextEdit', 'SUBTYPE': 'TextEdit', 'NOMBRE': 'TextEdit', 'MEDIDORCAUDAL': 'TextEdit', 'CONFIGURACION': 'TextEdit', 'GOLPE_ARIETE': 'TextEdit', 'SUBESTACION': 'TextEdit', 'VENTILACION': 'TextEdit', 'IZAMIENTO': 'TextEdit', 'SISTEMA_REBALSE': 'TextEdit', 'ESTADO': 'TextEdit', 'OBSERVACION': 'TextEdit', 'GlobalID': 'TextEdit', 'CreationDate': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'DESCRIPCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', });
lyr_DescargaASRioTubul_6.set('fieldImages', {'fid': 'TextEdit', 'DESCRIPCION': 'TextEdit', });
lyr_PuntodeInters_7.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', 'DESCRIPCION': 'TextEdit', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', 'HALLAZGO 3': 'ExternalResource', });
lyr_Colector_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'ESTADO': 'no label', 'DIAMETRO': 'no label', 'CAMARA_INICIO': 'no label', 'CAMARA_FINAL': 'no label', 'OBSERVACIONES': 'no label', 'TIPO': 'no label', 'MATERIALIDAD': 'no label', });
lyr_Cmara_4.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'hidden field', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'COTA SALIDA': 'hidden field', 'DIAMETRO ENTRADA 1': 'hidden field', 'DIAMETRO ENTRADA 2': 'hidden field', 'DIAMETRO ENTRADA 3': 'hidden field', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'DIAMETRO SALIDA 1': 'hidden field', 'DIAMETRO SALIDA 2': 'hidden field', 'HALLAZGO 1': 'hidden field', 'HALLAZGO 2': 'hidden field', 'COMUNA': 'hidden field', 'PROFUNDIDAD ENTRADA 1': 'hidden field', 'PROFUNDIDAD ENTRADA 2': 'hidden field', 'PROFUNDIDAD ENTRADA 3': 'hidden field', 'PROFUNDIDAD ENTRADA 4': 'hidden field', 'PROFUNDIDAD FONDO': 'hidden field', 'FALLA ESTRUCTURAL': 'hidden field', 'TERRENO INACCESIBLE': 'hidden field', 'RECINTO PARTICULAR O VIVIENDA': 'hidden field', 'CAMARA NUEVA': 'hidden field', 'REQUIERE LIMPIEZA': 'hidden field', 'DUDA?': 'hidden field', 'ESTADO CANAL': 'hidden field', 'ESTADO BANQUETA': 'hidden field', 'NAPA': 'hidden field', 'EMBANCAMIENTO': 'hidden field', 'ESTADO ESCALINES': 'hidden field', 'E (m) RTK': 'hidden field', 'N (m) RTK': 'hidden field', 'ELEV (m) RTK': 'hidden field', 'PROFUNDIDAD (m) RTK': 'hidden field', 'COTA ANILLO (m) RTK': 'hidden field', 'COTA FONDO (m) RTK': 'hidden field', 'DIAMETRO SALIDA 3': 'hidden field', 'ESCURRIMIENTO': 'hidden field', 'UBICACION REFERENCIAL': 'hidden field', 'OBSERVACIONES UBICACION': 'hidden field', 'OBSERVACIONES CONEXIONES': 'hidden field', });
lyr_PEAS_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'IDENTIFICADORELEMENTO': 'no label', 'SUBTYPE': 'no label', 'NOMBRE': 'inline label - visible with data', 'MEDIDORCAUDAL': 'no label', 'CONFIGURACION': 'no label', 'GOLPE_ARIETE': 'no label', 'SUBESTACION': 'no label', 'VENTILACION': 'no label', 'IZAMIENTO': 'no label', 'SISTEMA_REBALSE': 'no label', 'ESTADO': 'no label', 'OBSERVACION': 'no label', 'GlobalID': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'DESCRIPCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', });
lyr_DescargaASRioTubul_6.set('fieldLabels', {'fid': 'no label', 'DESCRIPCION': 'inline label - visible with data', });
lyr_PuntodeInters_7.set('fieldLabels', {'fid': 'no label', 'NOMBRE': 'inline label - visible with data', 'DESCRIPCION': 'inline label - visible with data', 'HALLAZGO 1': 'no label', 'HALLAZGO 2': 'no label', 'HALLAZGO 3': 'no label', });
lyr_PuntodeInters_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});