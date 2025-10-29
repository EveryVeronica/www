import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoidmVyb25pY2EwMSIsImEiOiJjbWhheDM4dXEwOXRhMmtvYXVrcDU4Y3I4In0.5DFxKBnJwZFbDe4KeFb1XA';




interface MarkerData {
  id: string;
  lng: number;
  lat: number;
  status?: string;
  color?: string; // สีหมุด
}
const DrawPolygonMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const drawRef = useRef<MapboxDraw | null>(null);
  const [savedGeoJSON, setSavedGeoJSON] = useState<string | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/satellite-v9',
             config: {
            basemap: {
                theme: 'monochrome',
                lightPreset: 'night'
            }
        },
      center: [99.4377, 15.4526],
      zoom: 20,
      maxZoom:16,
      pitch: 60,
      bearing: -30,
      antialias: false,
      attributionControl: false,
    });

    mapRef.current = map;

    map.on('load', () => {

                map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });


          // ✅ เพิ่ม DEM source สำหรับ 3D Terrain
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.terrain-rgb',
        tileSize: 512,
        maxzoom: 16
      });

      // ✅ เปิด terrain
      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1 });

      // ✅ ปรับแสงเพื่อให้เห็น relief ของภูเขาชัดขึ้น
      map.setLight({
        anchor: 'map',
        color: '#8dff2fff',
        intensity: 0.6,
        position: [1.15, 210, 30]
      });




      // เพิ่ม GeoJSON polygon เดิม
      map.addSource('maine', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [99.44171944273307, 15.434479276914814], [99.44043186100407, 15.433513939171391], [99.4372129066789, 15.436065179173184], [99.4364260511773, 15.437237360010016], [99.43435161394547, 15.438340582981652], [99.4353530664032, 15.438961143326623], [99.4366406481322, 15.439857504991437], [99.43656911581434, 15.441719166841992], [99.43213411207796, 15.443373963347653], [99.43091806266682, 15.441236515373461], [99.43027427180095, 15.441512316349275], [99.42898669007195, 15.440271209068484], [99.42669765588522, 15.440753862781861], [99.4256246711098, 15.440133307800735], [99.42426555706152, 15.440615961836173], [99.42126119969242, 15.44220181718623], [99.42068894114584, 15.444890848547885], [99.42283491069554, 15.44578718458574], [99.42376483083405, 15.445994030813594], [99.42426555706152, 15.449441437568566], [99.42519547720008, 15.45102722542552], [99.42655459124819, 15.45075143710487], [99.42769910834159, 15.45137196031122], [99.42805676993345, 15.452337214940357], [99.42884362543492, 15.452957733400666], [99.42877209311712, 15.45385403456136], [99.42698378515792, 15.45454349435613], [99.42633999429341, 15.454819277632282], [99.42662759994931, 15.457949574557816], [99.42608155735729, 15.45863375072004], [99.42542630624763, 15.459581067830214], [99.42542630624763, 15.460159981709268], [99.42619076587692, 15.46031786703179], [99.4273920595785, 15.459160038538371], [99.42799270642837, 15.45826534845159], [99.42892097883498, 15.457949574557816], [99.43143277475593, 15.458423235218987], [99.4330162982721, 15.45826534845159], [99.43274327697713, 15.459423181946136], [99.43405021070339, 15.461670291907723], [99.4340821250567, 15.462470033230744], [99.43296512270331, 15.462808384400319], [99.43264597917369, 15.462193200045164], [99.43143323376154, 15.462439274006911], [99.4311140902318, 15.462839143570434], [99.43018857399721, 15.462900661895873], [99.42926305776143, 15.463208253251267], [99.42836945587908, 15.463331289665675], [99.42798648364266, 15.46314673501604], [99.42753968270205, 15.463392807844954], [99.42731628223112, 15.464192542518134], [99.42776308317292, 15.465176827107143], [99.42811414105483, 15.46563820889746], [99.42843328458446, 15.465915037478283], [99.42868859940756, 15.465822761325768], [99.42865668505544, 15.465023032947897], [99.42913540034937, 15.464930756397905], [99.42993325917303, 15.464346337293051], [99.43057154623239, 15.464038747627924], [99.4315608911736, 15.464192542518134], [99.43248640740944, 15.464284819397037], [99.43389063893909, 15.463977229640534], [99.43475232646824, 15.463884952624625], [99.4361045859514, 15.465816416795619], [99.4359378618172, 15.466579678669078], [99.4351459221815, 15.46774465189334], [99.43422893944546, 15.468748933895156], [99.43277010327438, 15.46919081643344], [99.43181143950437, 15.469230987526174], [99.43101949986868, 15.468949789711061], [99.43018587919909, 15.46919081643344], [99.42989411196601, 15.469713040034122], [99.4301441981666, 15.470436116692142], [99.43064437056779, 15.47115919082458], [99.43118622400289, 15.471601068217524], [99.43185881480008, 15.472634034862352], [99.4327804074494, 15.473248936292578], [99.4334538790007, 15.473214775149614], [99.43497805145824, 15.473966318984282], [99.43490715971649, 15.473146452847956], [99.43533251016964, 15.47290732461272], [99.43671489914362, 15.472565712368976], [99.43749470830818, 15.472360744752365], [99.43951512296195, 15.47171167929369], [99.4390897725088, 15.470516027068484], [99.43962146057521, 15.4701060875732], [99.44029493212645, 15.46996944089399], [99.44064939083785, 15.469627823801943], [99.44128741651758, 15.469388691502019], [99.44282820836753, 15.46633643093449], [99.44608131417795, 15.46509537014785], [99.44804673227185, 15.465226008475952], [99.44994437732726, 15.46555260393508], [99.4519775684584, 15.466271112131551], [99.45689615383128, 15.458196627242742], [99.4565197911387, 15.45427891355611], [99.45441216006236, 15.44934539097136], [99.45185289375405, 15.44673347853984], [99.44962836707333, 15.446821518173266], [99.44780416539663, 15.44747274233471], [99.4458448376696, 15.446886640682123], [99.44476382926854, 15.445714432405737], [99.44199324034071, 15.441605536309638], [99.44199324034071, 15.437656990782145], [99.44232763851949, 15.435158892555847], [99.44171944273307, 15.434479276914814]
              ],
            ],
          },
          properties: {},
        },
      });

      map.addLayer({
        id: 'maine-fill',
        type: 'fill',
        source: 'maine',
        paint: {

          'fill-color': 'rgba(238, 255, 0, 0.14)',  // เขียว 50% โปร่งแสง
          'fill-outline-color': 'rgba(0, 255, 213, 1)' // แดงทึบ


        },
      });

      // สร้างหมุดแบบ custom

      new mapboxgl.Marker({ color: '#15ff00ff' }) // ✅ ถูกต้อง
        .setLngLat([99.43807400871279, 15.452610873330363])
        .setPopup(
          new mapboxgl.Popup({ offset: 50 })
            .setHTML('<h3>ID:01</h3><p>ออนไลน์</p>')
        )
        .addTo(map);












    });











    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        point: true,
        line_string: true,
        polygon: true,
        trash: true,
        /*         combine_features: true,
                uncombine_features: true, */
      },


      defaultMode: 'draw_polygon',
    });

    drawRef.current = draw;
    map.addControl(draw);

    // Event เมื่อสร้าง polygon
    map.on('draw.create', (e) => {
      console.log('GeoJSON created:', e.features[0]);
      alert('Polygon สร้างแล้ว!');

      // บันทึกลง localStorage เป็น text
      const geojsonStr = JSON.stringify(draw.getAll());
      localStorage.setItem('polygonData', geojsonStr);
      setSavedGeoJSON(geojsonStr);
    });





    // ปรับสไตล์ปุ่ม
    const polygonButton = document.querySelector('.mapboxgl-ctrl-group') as HTMLElement;
    if (polygonButton) {
      polygonButton.style.background = 'rgba(151, 120, 1, 0.28)';
      polygonButton.style.borderRadius = '0px';
    }

    // โหลด polygon จาก localStorage ถ้ามี
    /*     const saved = localStorage.getItem('polygonData');
        if (saved) {
          const data = JSON.parse(saved);
          draw.set(data); // โหลด polygon กลับมา
          setSavedGeoJSON(saved);
        } */

    return () => map.remove();
  }, []);

  // ฟังก์ชันดาวน์โหลดไฟล์ .txt
  const downloadGeoJSON = () => {
    if (!savedGeoJSON) return;
    const blob = new Blob([savedGeoJSON], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'polygon.txt';
    a.click();
    URL.revokeObjectURL(url);
  };




  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !drawRef.current) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = reader.result as string;
        const geojson = JSON.parse(text);


        // โหลดกลับ MapboxDraw
        drawRef.current?.set(geojson);

        // ✅ รีเฟรช Map
        drawRef.current?.changeMode('simple_select');

        alert('Polygon/Point ถูกโหลดเรียบร้อย! และ status ถูกตั้งแล้ว');
      } catch (err) {
        console.error('Error parsing file:', err);
        alert('ไม่สามารถโหลดไฟล์ได้');
      }
    };
    reader.readAsText(file);
  };





  const createMarker = (map: mapboxgl.Map, { lng, lat, id, status, color }: MarkerData) => {
    const el = document.createElement("div");
    el.style.width = "8px";
    el.style.height = "8px";
    el.style.borderRadius = "50%";
    el.style.background = color || "#b3ff00ff";
    el.style.boxShadow = `0 0 10px ${color || "#b3ff00ff"}`;
    el.style.border = "1px solid #33ff0038";
    el.style.cursor = "pointer";

    new mapboxgl.Marker({ element: el })
      .setLngLat([lng, lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 50 }).setHTML(
          `<h3>ID:${id}</h3><p>${status || "ออนไลน์"}</p>`
        )
      )
      .addTo(map);
  };

  const loadMarkersFromFile = (map: mapboxgl.Map, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const markers: MarkerData[] = JSON.parse(reader.result as string);
        markers.forEach((m) => createMarker(map, m));
        alert("โหลด Marker เสร็จเรียบร้อย!");
      } catch (err) {
        console.error(err);
        alert("ไม่สามารถโหลดไฟล์ได้");
      }
    };
    reader.readAsText(file);
  };



  return (
    <div style={{ position: "relative", height: "90vh" }}>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />

      {/* Overlay controls */}
      <div
        style={{
          position: "absolute",
          bottom: "2px",
          left: "2px",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          fontSize: "10px", // ฟ้อนต์เล็กมาก
          color: "#fff",
        }}
      >
        <button
          onClick={downloadGeoJSON}
          style={{
            padding: "2px 2px",
            fontSize: "12px",
            background: "#00ffcc",
            border: "none",
            cursor: "pointer",
          }}
        >
          💾 ดาวน์โหลด
        </button>

        <input
          type="file"
          accept=".txt,.json"
          onChange={handleFileUpload}
          style={{
            padding: "2px 2px",
            fontSize: "12px",
            cursor: "pointer",
            border: "1px solid #00ffcc",
          }}
        />

        <input
          type="file"
          accept=".txt,.json"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            if (!mapRef.current) return;
            loadMarkersFromFile(mapRef.current, file);
          }}
          style={{
            padding: "2px 2px",
            fontSize: "12px",
            cursor: "pointer",
            border: "1px solid #00ffcc",
          }}
        />
      </div>
    </div>
  );


};

export default DrawPolygonMap;
