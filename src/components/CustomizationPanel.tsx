import React, { useState, useEffect } from 'react';
import { Settings, X, Palette, Type, Zap, Moon, Sun, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';

interface ThemeValues {
  primaryH: number;
  primaryS: number;
  primaryL: number;
  secondaryH: number;
  secondaryS: number;
  secondaryL: number;
  accentH: number;
  accentS: number;
  accentL: number;
  radius: number;
  fontSize: number;
  spacing: number;
  shadowEnabled: boolean;
  scale: number;
  transition: number;
  fontFamily: string;
  darkMode: boolean;
}

const defaultTheme: ThemeValues = {
  primaryH: 217,
  primaryS: 91,
  primaryL: 60,
  secondaryH: 210,
  secondaryS: 20,
  secondaryL: 94,
  accentH: 142,
  accentS: 71,
  accentL: 45,
  radius: 8,
  fontSize: 16,
  spacing: 16,
  shadowEnabled: true,
  scale: 1,
  transition: 250,
  fontFamily: 'Inter',
  darkMode: false,
};

export function CustomizationPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeValues>(defaultTheme);

  // Apply theme changes to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    // Colors
    root.style.setProperty('--ui-primary-h', theme.primaryH.toString());
    root.style.setProperty('--ui-primary-s', `${theme.primaryS}%`);
    root.style.setProperty('--ui-primary-l', `${theme.primaryL}%`);
    
    root.style.setProperty('--ui-secondary-h', theme.secondaryH.toString());
    root.style.setProperty('--ui-secondary-s', `${theme.secondaryS}%`);
    root.style.setProperty('--ui-secondary-l', `${theme.secondaryL}%`);
    
    root.style.setProperty('--ui-accent-h', theme.accentH.toString());
    root.style.setProperty('--ui-accent-s', `${theme.accentS}%`);
    root.style.setProperty('--ui-accent-l', `${theme.accentL}%`);
    
    // Properties
    root.style.setProperty('--ui-radius', `${theme.radius}px`);
    root.style.setProperty('--ui-radius-sm', `${theme.radius / 2}px`);
    root.style.setProperty('--ui-radius-lg', `${theme.radius * 1.5}px`);
    root.style.setProperty('--ui-radius-xl', `${theme.radius * 2}px`);
    
    root.style.setProperty('--ui-font-size', `${theme.fontSize}px`);
    root.style.setProperty('--ui-font-size-sm', `${theme.fontSize - 2}px`);
    root.style.setProperty('--ui-font-size-lg', `${theme.fontSize + 2}px`);
    root.style.setProperty('--ui-font-size-xl', `${theme.fontSize + 4}px`);
    root.style.setProperty('--ui-font-size-2xl', `${theme.fontSize + 8}px`);
    root.style.setProperty('--ui-font-size-3xl', `${theme.fontSize + 14}px`);
    root.style.setProperty('--ui-font-size-4xl', `${theme.fontSize + 20}px`);
    
    root.style.setProperty('--ui-spacing', `${theme.spacing}px`);
    root.style.setProperty('--ui-spacing-sm', `${theme.spacing / 2}px`);
    root.style.setProperty('--ui-spacing-lg', `${theme.spacing * 1.5}px`);
    root.style.setProperty('--ui-spacing-xl', `${theme.spacing * 2}px`);
    root.style.setProperty('--ui-spacing-2xl', `${theme.spacing * 3}px`);
    
    root.style.setProperty('--ui-shadow-enabled', theme.shadowEnabled ? '1' : '0');
    root.style.setProperty('--ui-scale', theme.scale.toString());
    root.style.setProperty('--ui-transition', `${theme.transition}ms cubic-bezier(0.4, 0, 0.2, 1)`);
    root.style.setProperty('--ui-transition-fast', `${theme.transition * 0.6}ms cubic-bezier(0.4, 0, 0.2, 1)`);
    root.style.setProperty('--ui-transition-slow', `${theme.transition * 1.4}ms cubic-bezier(0.4, 0, 0.2, 1)`);
    
    // Font family
    const fontFamilies = {
      'Inter': "'Inter', system-ui, -apple-system, sans-serif",
      'Roboto': "'Roboto', system-ui, sans-serif",
      'Poppins': "'Poppins', system-ui, sans-serif",
      'Montserrat': "'Montserrat', system-ui, sans-serif",
      'Open Sans': "'Open Sans', system-ui, sans-serif",
    };
    root.style.setProperty('--ui-font-family', fontFamilies[theme.fontFamily as keyof typeof fontFamilies]);
    
    // Dark mode
    if (theme.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const updateTheme = (key: keyof ThemeValues, value: any) => {
    setTheme(prev => ({ ...prev, [key]: value }));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  const ColorPicker = ({ label, hue, saturation, lightness, onHueChange, onSaturationChange, onLightnessChange }: {
    label: string;
    hue: number;
    saturation: number;
    lightness: number;
    onHueChange: (value: number) => void;
    onSaturationChange: (value: number) => void;
    onLightnessChange: (value: number) => void;
  }) => (
    <div className="space-y-3 p-3 rounded-lg"
         style={{ backgroundColor: 'var(--ui-surface)' }}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium"
              style={{ color: 'var(--ui-text-primary)' }}>
          {label}
        </span>
        <div className="flex items-center gap-2">
          <div 
            className="w-8 h-8 rounded-lg border-2 shadow-sm ui-transition hover:scale-110"
            style={{ 
              backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
              borderColor: 'var(--ui-border)'
            }}
          />
          <span className="text-xs font-mono px-2 py-1 rounded"
                style={{ 
                  backgroundColor: 'var(--ui-background)',
                  color: 'var(--ui-text-secondary)',
                  border: '1px solid var(--ui-border)'
                }}>
            {hue}°, {saturation}%, {lightness}%
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <label className="text-xs font-medium block mb-1"
                 style={{ color: 'var(--ui-text-secondary)' }}>
            Hue: {hue}°
          </label>
          <Slider
            value={[hue]}
            onValueChange={([value]) => onHueChange(value)}
            max={360}
            step={1}
            className="ui-transition"
          />
        </div>
        <div>
          <label className="text-xs font-medium block mb-1"
                 style={{ color: 'var(--ui-text-secondary)' }}>
            Saturation: {saturation}%
          </label>
          <Slider
            value={[saturation]}
            onValueChange={([value]) => onSaturationChange(value)}
            max={100}
            step={1}
            className="ui-transition"
          />
        </div>
        <div>
          <label className="text-xs font-medium block mb-1"
                 style={{ color: 'var(--ui-text-secondary)' }}>
            Lightness: {lightness}%
          </label>
          <Slider
            value={[lightness]}
            onValueChange={([value]) => onLightnessChange(value)}
            max={100}
            step={1}
            className="ui-transition"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 shadow-xl ui-transition-fast hover:scale-110"
        style={{ 
          backgroundColor: 'var(--ui-primary)',
          color: 'var(--ui-primary-foreground)'
        }}
        size="icon"
      >
        <Settings className="h-4 w-4" />
      </Button>

      {/* Panel Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 animate-fade-in">
          <div className="fixed right-0 top-0 h-full w-80 shadow-2xl overflow-y-auto animate-slide-in-right"
               style={{ 
                 backgroundColor: 'var(--ui-surface-elevated)',
                 borderLeft: '1px solid var(--ui-border)'
               }}>
            <Card className="h-full rounded-none border-0" style={{ backgroundColor: 'transparent' }}>
              {/* Header */}
              <div className="sticky top-0 p-4 flex items-center justify-between border-b"
                   style={{ 
                     backgroundColor: 'var(--ui-surface-elevated)',
                     borderBottomColor: 'var(--ui-border)',
                     color: 'var(--ui-text-primary)'
                   }}>
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Customize Theme
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={resetTheme}
                    className="ui-transition-fast hover:scale-105"
                    style={{ color: 'var(--ui-text-secondary)' }}
                    title="Reset to Default"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="ui-transition-fast hover:scale-105"
                    style={{ color: 'var(--ui-text-secondary)' }}
                    title="Close Panel"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-6" style={{ color: 'var(--ui-text-primary)' }}>
                {/* Dark Mode */}
                <div className="flex items-center justify-between p-3 rounded-lg"
                     style={{ backgroundColor: 'var(--ui-surface)' }}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg"
                         style={{ backgroundColor: 'var(--ui-primary)', color: 'var(--ui-primary-foreground)' }}>
                      {theme.darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    </div>
                    <span className="text-sm font-medium">Dark Mode</span>
                  </div>
                  <Switch
                    checked={theme.darkMode}
                    onCheckedChange={(checked) => updateTheme('darkMode', checked)}
                  />
                </div>

                <Separator style={{ backgroundColor: 'var(--ui-border)' }} />

                {/* Colors */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold flex items-center gap-2"
                      style={{ color: 'var(--ui-text-primary)' }}>
                    <div className="p-1 rounded"
                         style={{ backgroundColor: 'var(--ui-accent)', color: 'var(--ui-accent-foreground)' }}>
                      <Palette className="h-4 w-4" />
                    </div>
                    Colors
                  </h3>
                  
                  <div className="space-y-4">
                    <ColorPicker
                      label="Primary"
                      hue={theme.primaryH}
                      saturation={theme.primaryS}
                      lightness={theme.primaryL}
                      onHueChange={(value) => updateTheme('primaryH', value)}
                      onSaturationChange={(value) => updateTheme('primaryS', value)}
                      onLightnessChange={(value) => updateTheme('primaryL', value)}
                    />
                    
                    <ColorPicker
                      label="Secondary"
                      hue={theme.secondaryH}
                      saturation={theme.secondaryS}
                      lightness={theme.secondaryL}
                      onHueChange={(value) => updateTheme('secondaryH', value)}
                      onSaturationChange={(value) => updateTheme('secondaryS', value)}
                      onLightnessChange={(value) => updateTheme('secondaryL', value)}
                    />
                    
                    <ColorPicker
                      label="Accent"
                      hue={theme.accentH}
                      saturation={theme.accentS}
                      lightness={theme.accentL}
                      onHueChange={(value) => updateTheme('accentH', value)}
                      onSaturationChange={(value) => updateTheme('accentS', value)}
                      onLightnessChange={(value) => updateTheme('accentL', value)}
                    />
                  </div>
                </div>

                <Separator style={{ backgroundColor: 'var(--ui-border)' }} />

                {/* Typography */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold flex items-center gap-2"
                      style={{ color: 'var(--ui-text-primary)' }}>
                    <div className="p-1 rounded"
                         style={{ backgroundColor: 'var(--ui-info)', color: 'white' }}>
                      <Type className="h-4 w-4" />
                    </div>
                    Typography
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium block mb-2"
                             style={{ color: 'var(--ui-text-primary)' }}>
                        Font Family
                      </label>
                      <Select value={theme.fontFamily} onValueChange={(value) => updateTheme('fontFamily', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Inter">Inter</SelectItem>
                          <SelectItem value="Roboto">Roboto</SelectItem>
                          <SelectItem value="Poppins">Poppins</SelectItem>
                          <SelectItem value="Montserrat">Montserrat</SelectItem>
                          <SelectItem value="Open Sans">Open Sans</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium block mb-2"
                             style={{ color: 'var(--ui-text-primary)' }}>
                        Font Size: <span style={{ color: 'var(--ui-primary)' }}>{theme.fontSize}px</span>
                      </label>
                      <Slider
                        value={[theme.fontSize]}
                        onValueChange={([value]) => updateTheme('fontSize', value)}
                        min={12}
                        max={20}
                        step={1}
                        className="ui-transition"
                      />
                    </div>
                  </div>
                </div>

                <Separator style={{ backgroundColor: 'var(--ui-border)' }} />

                {/* Layout */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold flex items-center gap-2"
                      style={{ color: 'var(--ui-text-primary)' }}>
                    <div className="p-1 rounded"
                         style={{ backgroundColor: 'var(--ui-warning)', color: 'white' }}>
                      <Zap className="h-4 w-4" />
                    </div>
                    Layout & Effects
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium block mb-2"
                             style={{ color: 'var(--ui-text-primary)' }}>
                        Border Radius: <span style={{ color: 'var(--ui-primary)' }}>{theme.radius}px</span>
                      </label>
                      <Slider
                        value={[theme.radius]}
                        onValueChange={([value]) => updateTheme('radius', value)}
                        min={0}
                        max={20}
                        step={1}
                        className="ui-transition"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium block mb-2"
                             style={{ color: 'var(--ui-text-primary)' }}>
                        Spacing: <span style={{ color: 'var(--ui-primary)' }}>{theme.spacing}px</span>
                      </label>
                      <Slider
                        value={[theme.spacing]}
                        onValueChange={([value]) => updateTheme('spacing', value)}
                        min={8}
                        max={32}
                        step={2}
                        className="ui-transition"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium block mb-2"
                             style={{ color: 'var(--ui-text-primary)' }}>
                        Scale: <span style={{ color: 'var(--ui-primary)' }}>{theme.scale}x</span>
                      </label>
                      <Slider
                        value={[theme.scale]}
                        onValueChange={([value]) => updateTheme('scale', value)}
                        min={0.8}
                        max={1.2}
                        step={0.05}
                        className="ui-transition"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-lg"
                         style={{ backgroundColor: 'var(--ui-surface)' }}>
                      <span className="text-sm font-medium">Box Shadows</span>
                      <Switch
                        checked={theme.shadowEnabled}
                        onCheckedChange={(checked) => updateTheme('shadowEnabled', checked)}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium block mb-2"
                             style={{ color: 'var(--ui-text-primary)' }}>
                        Animation Speed: <span style={{ color: 'var(--ui-primary)' }}>{theme.transition}ms</span>
                      </label>
                      <Slider
                        value={[theme.transition]}
                        onValueChange={([value]) => updateTheme('transition', value)}
                        min={100}
                        max={500}
                        step={25}
                        className="ui-transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t text-center"
                     style={{ borderTopColor: 'var(--ui-border)' }}>
                  <p className="text-xs opacity-75"
                     style={{ color: 'var(--ui-text-secondary)' }}>
                    🎨 Live Theme Customization
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}