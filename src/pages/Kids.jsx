import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

const teacherAnimation = {
  v: '5.10.1',
  fr: 30,
  ip: 0,
  op: 90,
  w: 400,
  h: 260,
  nm: 'Teacher Classroom',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Teacher Body',
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [200, 170, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'rc',
          d: 1,
          s: { k: [120, 140] },
          p: { k: [0, 0] },
          r: { k: 24 },
          fill: { c: { k: [0.16, 0.28, 0.58, 1] } }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Teacher Hand',
      ks: {
        o: { k: 100 },
        r: {
          k: [
            { t: 0, s: [-23] },
            { t: 45, s: [23], e: 'easeInOut' },
            { t: 90, s: [-23] }
          ]
        },
        p: { k: [248, 158, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'rc',
          d: 1,
          s: { k: [16, 62] },
          p: { k: [0, 0] },
          r: { k: 12 },
          fill: { c: { k: [0.96, 0.80, 0.61, 1] } }
        }
      ]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'Kid',
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [120, 215, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'el',
          p: { k: [0, 0] },
          s: { k: [46, 46] },
          fill: { c: { k: [0.99, 0.87, 0.74, 1] } }
        }
      ]
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: 'Kid Blink',
      ks: {
        o: {
          k: [
            { t: 0, s: [0] },
            { t: 15, s: [100] },
            { t: 18, s: [0] },
            { t: 45, s: [0] },
            { t: 60, s: [100] },
            { t: 63, s: [0] },
            { t: 90, s: [0] }
          ]
        },
        r: { k: 0 },
        p: { k: [120, 215, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'rc',
          d: 1,
          s: { k: [36, 6] },
          p: { k: [0, 0] },
          r: { k: 3 },
          fill: { c: { k: [0.12, 0.16, 0.2, 1] } }
        }
      ]
    }
  ]
};

const kidsStudyingAnimation = {
  v: '5.10.1',
  fr: 30,
  ip: 0,
  op: 90,
  w: 400,
  h: 260,
  nm: 'Kids Studying',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'KidA',
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: {
          k: [
            { t: 0, s: [100, 180, 0] },
            { t: 45, s: [100, 186, 0], e: 'easeInOut' },
            { t: 90, s: [100, 180, 0] }
          ]
        },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'el',
          p: { k: [0, 0] },
          s: { k: [38, 38] },
          fill: { c: { k: [0.99, 0.86, 0.74, 1] } }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'KidB',
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: {
          k: [
            { t: 0, s: [260, 195, 0] },
            { t: 45, s: [260, 201, 0], e: 'easeInOut' },
            { t: 90, s: [260, 195, 0] }
          ]
        },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'el',
          p: { k: [0, 0] },
          s: { k: [42, 42] },
          fill: { c: { k: [0.99, 0.86, 0.74, 1] } }
        }
      ]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'Book',
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [180, 235, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'rc',
          d: 1,
          s: { k: [180, 28] },
          p: { k: [0, 0] },
          r: { k: 8 },
          fill: { c: { k: [0.14, 0.2, 0.45, 1] } }
        }
      ]
    }
  ]
};

const activityAnimation = {
  v: '5.10.1',
  fr: 30,
  ip: 0,
  op: 90,
  w: 400,
  h: 260,
  nm: 'Activity Painting',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Brush',
      ks: {
        o: { k: 100 },
        r: {
          k: [
            { t: 0, s: [-15] },
            { t: 45, s: [15], e: 'easeInOut' },
            { t: 90, s: [-15] }
          ]
        },
        p: { k: [220, 165, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'rc',
          d: 1,
          s: { k: [20, 80] },
          p: { k: [0, 0] },
          r: { k: 10 },
          fill: { c: { k: [0.6, 0.28, 0.76, 1] } }
        },
        {
          ty: 'el',
          p: { k: [0, 44] },
          s: { k: [25, 25] },
          fill: { c: { k: [1, 0.85, 0.35, 1] } }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Paint Drop',
      ks: {
        o: {
          k: [
            { t: 0, s: [0] },
            { t: 15, s: [90] },
            { t: 25, s: [0] },
            { t: 45, s: [0] },
            { t: 60, s: [90] },
            { t: 70, s: [0] },
            { t: 90, s: [0] }
          ]
        },
        r: { k: 0 },
        p: { k: [240, 210, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'el',
          p: { k: [0, 0] },
          s: { k: [10, 10] },
          fill: { c: { k: [0.97, 0.31, 0.5, 1] } }
        }
      ]
    }
  ]
};

const playgroundAnimation = {
  v: '5.10.1',
  fr: 30,
  ip: 0,
  op: 90,
  w: 400,
  h: 260,
  nm: 'Playground Swing',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Swing Seat',
      ks: {
        o: { k: 100 },
        r: {
          k: [
            { t: 0, s: [-12] },
            { t: 45, s: [12], e: 'easeInOut' },
            { t: 90, s: [-12] }
          ]
        },
        p: { k: [200, 190, 0] },
        a: { k: [0, -20, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'rc',
          d: 1,
          s: { k: [90, 15] },
          p: { k: [0, 20] },
          r: { k: 8 },
          fill: { c: { k: [0.16, 0.62, 0.42, 1] } }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Happy Kid',
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: {
          k: [
            { t: 0, s: [200, 155, 0] },
            { t: 45, s: [200, 148, 0], e: 'easeInOut' },
            { t: 90, s: [200, 155, 0] }
          ]
        },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'el',
          p: { k: [0, 0] },
          s: { k: [36, 36] },
          fill: { c: { k: [0.99, 0.86, 0.74, 1] } }
        }
      ]
    }
  ]
};

const buildingAnimation = {
  v: '5.10.1',
  fr: 30,
  ip: 0,
  op: 90,
  w: 400,
  h: 260,
  nm: 'School Building',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Building',
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [200, 182, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'rc',
          d: 1,
          s: { k: [210, 140] },
          p: { k: [0, 0] },
          r: { k: 16 },
          fill: { c: { k: [0.2, 0.33, 0.58, 1] } }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Flag',
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [258, 118, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'sh',
          it: [
            {
              ty: 'sh',
              ks: {
                k: {
                  i: [[0,0],[0,0],[0,0]],
                  o: [[0,0],[0,0],[0,0]],
                  v: [[0,0],[18,8],[0,16]],
                  c: false
                }
              }
            },
            { ty: 'fl', c: { k: [0.96,0.24,0.2,1] } }
          ]
        }
      ]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'Cloud',
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: {
          k: [
            { t: 0, s: [90, 70, 0] },
            { t: 45, s: [100, 70, 0], e: 'easeInOut' },
            { t: 90, s: [90, 70, 0] }
          ]
        },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: 'el',
          p: { k: [0, 0] },
          s: { k: [64, 26] },
          fill: { c: { k: [1, 1, 1, 0.85] } }
        }
      ]
    }
  ]
};

const animatedScenes = [
  { title: 'Teacher Classroom', description: 'Teacher + students, soft gestures.', anim: teacherAnimation },
  { title: 'Kids Studying', description: 'Reading, writing, gentle head moves.', anim: kidsStudyingAnimation },
  { title: 'Activity Painting', description: 'Drawing motion with a paintbrush.', anim: activityAnimation },
  { title: 'Playground', description: 'Swing movement and happy faces.', anim: playgroundAnimation },
  { title: 'School Building', description: 'Static building with clouds and flag.', anim: buildingAnimation }
];

const Kids = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{ backgroundColor: '#0B0F19', color: '#FFFFFF', minHeight: '100vh', paddingTop: '80px' }}>
      <section style={{ padding: '64px 24px 32px', backgroundColor: '#0F172A' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ fontSize: '2.4rem', fontWeight: '800', color: '#FFFFFF' }}>
            Merry Kids Animation Studio
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ color: '#9CA3AF', marginTop: '1rem', maxWidth: '700px', marginInline: 'auto', lineHeight: 1.6 }}>
            Lottie-style cartoon animations for Indian school context with smooth loop, soft motion, and friendly UI.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '32px 24px 64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px' }}>
            {animatedScenes.map((scene, index) => (
              <motion.div key={scene.title} whileHover={{ y: -4 }} transition={{ duration: 0.3 }} style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(148, 163, 184, 0.25)', borderRadius: '18px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <h3 style={{ color: '#E5E7EB', fontSize: '1.1rem', fontWeight: '700' }}>{scene.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '10px' }}>{scene.description}</p>
                <div style={{ background: '#0B1120', borderRadius: '14px', padding: '8px', minHeight: '240px' }}>
                  <Lottie animationData={scene.anim} loop autoplay style={{ width: '100%', height: '100%' }} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ marginTop: '44px', textAlign: 'center' }}>
            <button
              onClick={() => setClicked(!clicked)}
              style={{ cursor: 'pointer', padding: '12px 28px', borderRadius: '10px', border: 'none', background: 'linear-gradient(135deg, #3b4e8a 0%, #5f52a9 100%)', color: '#fff', fontWeight: 700 }}
            >
              {clicked ? 'Animation Mode: Active' : 'Animation Mode: Tap to Toggle'}
            </button>
          </motion.div>

          {clicked && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ color: '#A5B4FC', marginTop: '14px', textAlign: 'center' }}>
              Playful mode enabled. All loops are live (2-4 sec cycle) and optimized for production.
            </motion.p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Kids;