import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-20); // Keep last 20 points
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-hover')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Neon Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="neon-trail"
          style={{
            left: point.x,
            top: point.y,
            opacity: (index + 1) / trail.length * 0.8,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
      
      {/* Main Cursor */}
      <div
        className={`cyber-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer Ring */}
        <div className="cursor-outer-ring">
          <div className="ring-segment segment-1"></div>
          <div className="ring-segment segment-2"></div>
          <div className="ring-segment segment-3"></div>
          <div className="ring-segment segment-4"></div>
        </div>
        
        {/* Inner Core */}
        <div className="cursor-core">
          <div className="core-dot"></div>
          <div className="core-pulse"></div>
        </div>
        
        {/* Energy Beams */}
        <div className="energy-beam beam-1"></div>
        <div className="energy-beam beam-2"></div>
        <div className="energy-beam beam-3"></div>
        <div className="energy-beam beam-4"></div>
      </div>
    </>
  );
};

export default CustomCursor;