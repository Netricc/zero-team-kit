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
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-ui-text-primary">{label}</span>
        <div 
          className="w-6 h-6 rounded border-2 border-ui-border"
          style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)` }}
        />
      </div>
      <div className="space-y-2">
        <div>
          <label className="text-xs text-ui-text-secondary">Hue: {hue}°</label>
          <Slider
            value={[hue]}
            onValueChange={([value]) => onHueChange(value)}
            max={360}
            step={1}
            className="mt-1"
          />
        </div>
        <div>
          <label className="text-xs text-ui-text-secondary">Saturation: {saturation}%</label>
          <Slider
            value={[saturation]}
            onValueChange={([value]) => onSaturationChange(value)}
            max={100}
            step={1}
            className="mt-1"
          />
        </div>
        <div>
          <label className="text-xs text-ui-text-secondary">Lightness: {lightness}%</label>
          <Slider
            value={[lightness]}
            onValueChange={([value]) => onLightnessChange(value)}
            max={100}
            step={1}
            className="mt-1"
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
        className="fixed top-4 right-4 z-50 bg-ui-primary text-white shadow-lg hover:scale-105 ui-transition"
        size="icon"
      >
        <Settings className="h-4 w-4" />
      </Button>

      {/* Panel Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 ui-transition">
          <div className="fixed right-0 top-0 h-full w-80 bg-ui-surface-elevated border-l border-ui-border shadow-2xl overflow-y-auto">
            <Card className="h-full rounded-none border-0">
              {/* Header */}
              <div className="sticky top-0 bg-ui-surface-elevated border-b border-ui-border p-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-ui-text-primary flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Customize
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={resetTheme}
                    className="text-ui-text-secondary hover:text-ui-text-primary"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-ui-text-secondary hover:text-ui-text-primary"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-6">
                {/* Dark Mode */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {theme.darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    <span className="text-sm font-medium">Dark Mode</span>
                  </div>
                  <Switch
                    checked={theme.darkMode}
                    onCheckedChange={(checked) => updateTheme('darkMode', checked)}
                  />
                </div>

                <Separator />

                {/* Colors */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-ui-text-primary flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    Colors
                  </h3>
                  
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

                <Separator />

                {/* Typography */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-ui-text-primary flex items-center gap-2">
                    <Type className="h-4 w-4" />
                    Typography
                  </h3>
                  
                  <div>
                    <label className="text-sm font-medium text-ui-text-primary">Font Family</label>
                    <Select value={theme.fontFamily} onValueChange={(value) => updateTheme('fontFamily', value)}>
                      <SelectTrigger className="mt-1">
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
                    <label className="text-sm font-medium text-ui-text-primary">Font Size: {theme.fontSize}px</label>
                    <Slider
                      value={[theme.fontSize]}
                      onValueChange={([value]) => updateTheme('fontSize', value)}
                      min={12}
                      max={20}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                </div>

                <Separator />

                {/* Layout */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-ui-text-primary flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Layout
                  </h3>
                  
                  <div>
                    <label className="text-sm font-medium text-ui-text-primary">Border Radius: {theme.radius}px</label>
                    <Slider
                      value={[theme.radius]}
                      onValueChange={([value]) => updateTheme('radius', value)}
                      min={0}
                      max={20}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-ui-text-primary">Spacing: {theme.spacing}px</label>
                    <Slider
                      value={[theme.spacing]}
                      onValueChange={([value]) => updateTheme('spacing', value)}
                      min={8}
                      max={32}
                      step={2}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-ui-text-primary">Scale: {theme.scale}x</label>
                    <Slider
                      value={[theme.scale]}
                      onValueChange={([value]) => updateTheme('scale', value)}
                      min={0.8}
                      max={1.2}
                      step={0.05}
                      className="mt-2"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ui-text-primary">Box Shadows</span>
                    <Switch
                      checked={theme.shadowEnabled}
                      onCheckedChange={(checked) => updateTheme('shadowEnabled', checked)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-ui-text-primary">Animation Speed: {theme.transition}ms</label>
                    <Slider
                      value={[theme.transition]}
                      onValueChange={([value]) => updateTheme('transition', value)}
                      min={100}
                      max={500}
                      step={25}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}