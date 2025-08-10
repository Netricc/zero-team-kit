import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Star, 
  Heart, 
  Share2, 
  ArrowRight,
  Check,
  Info,
  AlertTriangle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';

export function UIShowcase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "This UI kit has transformed our development process. The components are beautiful and highly customizable.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Mike Chen", 
      role: "Lead Designer, Creative Studio",
      content: "The attention to detail and consistency across all components is outstanding. Highly recommended!",
      avatar: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, StartupXYZ", 
      content: "Easy to implement and customize. Our team was able to ship faster while maintaining design quality.",
      avatar: "/placeholder.svg"
    }
  ];

  const products = [
    { id: 1, name: "Premium Widget", price: "$99", rating: 4.8, image: "/placeholder.svg" },
    { id: 2, name: "Pro Component", price: "$149", rating: 4.9, image: "/placeholder.svg" },
    { id: 3, name: "Enterprise Suite", price: "$299", rating: 4.7, image: "/placeholder.svg" }
  ];

  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User" },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", status: "Active", role: "Editor" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Active", role: "User" },
  ];

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Navigation */}
      <nav className="bg-ui-surface-elevated border-b border-ui-border ui-shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="text-xl font-bold text-ui-text-primary">UIKit</div>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-ui-text-secondary hover:text-ui-text-primary ui-transition">Home</a>
                <a href="#" className="text-ui-text-secondary hover:text-ui-text-primary ui-transition">Components</a>
                <a href="#" className="text-ui-text-secondary hover:text-ui-text-primary ui-transition">Templates</a>
                <a href="#" className="text-ui-text-secondary hover:text-ui-text-primary ui-transition">About</a>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ui-text-muted h-4 w-4" />
                <Input placeholder="Search..." className="pl-10 w-64" />
              </div>
              <Button variant="outline">Sign In</Button>
              <Button className="bg-ui-primary text-white hover:opacity-90">Get Started</Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-ui-surface border-t border-ui-border p-4 space-y-4">
            <a href="#" className="block text-ui-text-secondary hover:text-ui-text-primary ui-transition">Home</a>
            <a href="#" className="block text-ui-text-secondary hover:text-ui-text-primary ui-transition">Components</a>
            <a href="#" className="block text-ui-text-secondary hover:text-ui-text-primary ui-transition">Templates</a>
            <a href="#" className="block text-ui-text-secondary hover:text-ui-text-primary ui-transition">About</a>
            <div className="pt-4 border-t border-ui-border space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full bg-ui-primary text-white">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-ui-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-ui-4xl font-bold mb-6">
            Beautiful UI Components for Modern Web
          </h1>
          <p className="text-ui-xl text-white/90 mb-8 max-w-2xl mx-auto">
            A comprehensive collection of customizable components designed for web development competitions and professional projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-ui-text-primary">
              Explore Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ui-primary">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="py-16 bg-ui-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-ui-3xl font-bold text-center mb-12 text-ui-text-primary">Button Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-ui-text-primary">Primary Buttons</h3>
              <div className="space-y-2">
                <Button className="w-full bg-ui-primary">Primary</Button>
                <Button className="w-full bg-ui-accent">Accent</Button>
                <Button className="w-full bg-ui-success text-white">Success</Button>
                <Button className="w-full bg-ui-error text-white">Error</Button>
              </div>
            </Card>
            
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-ui-text-primary">Outline Buttons</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">Default</Button>
                <Button variant="outline" className="w-full border-ui-accent text-ui-accent">Accent</Button>
                <Button variant="outline" className="w-full border-ui-success text-ui-success">Success</Button>
                <Button variant="outline" className="w-full border-ui-error text-ui-error">Error</Button>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-ui-text-primary">Ghost Buttons</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full">Default</Button>
                <Button variant="ghost" className="w-full text-ui-accent">Accent</Button>
                <Button variant="ghost" className="w-full text-ui-success">Success</Button>
                <Button variant="ghost" className="w-full text-ui-error">Error</Button>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-ui-text-primary">Icon Buttons</h3>
              <div className="space-y-2">
                <Button className="w-full bg-ui-primary"><Heart className="mr-2 h-4 w-4" />Like</Button>
                <Button className="w-full bg-ui-accent"><Share2 className="mr-2 h-4 w-4" />Share</Button>
                <Button variant="outline" className="w-full"><Star className="mr-2 h-4 w-4" />Favorite</Button>
                <Button size="icon" className="bg-ui-primary"><Search className="h-4 w-4" /></Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-ui-3xl font-bold text-center mb-12 text-ui-text-primary">Product Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="ui-shadow hover:ui-shadow-lg ui-transition hover:scale-105 overflow-hidden">
                <div className="aspect-video bg-ui-gradient-surface relative">
                  <Badge className="absolute top-2 right-2 bg-ui-primary">New</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-ui-text-primary">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-ui-2xl font-bold text-ui-primary">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-ui-text-secondary">{product.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-ui-primary">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-ui-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-ui-3xl font-bold text-center mb-12 text-ui-text-primary">Form Components</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-ui-text-primary">First Name</label>
                    <Input placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ui-text-primary">Last Name</label>
                    <Input placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-ui-text-primary">Email</label>
                  <Input type="email" placeholder="john@example.com" className="mt-1" />
                </div>

                <div>
                  <label className="text-sm font-medium text-ui-text-primary">Password</label>
                  <div className="relative mt-1">
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-ui-text-primary">Country</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-ui-text-primary">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="mt-1" rows={4} />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <label htmlFor="newsletter" className="text-sm text-ui-text-secondary">
                    Subscribe to our newsletter
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <label htmlFor="notifications" className="text-sm text-ui-text-secondary">
                      Email notifications
                    </label>
                  </div>
                </div>

                <Button className="w-full bg-ui-primary">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-ui-3xl font-bold text-center mb-12 text-ui-text-primary">Alerts & Notifications</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <Alert className="border-ui-success bg-ui-success/10">
              <Check className="h-4 w-4 text-ui-success" />
              <AlertTitle className="text-ui-success">Success</AlertTitle>
              <AlertDescription>Your form has been submitted successfully!</AlertDescription>
            </Alert>

            <Alert className="border-ui-info bg-ui-info/10">
              <Info className="h-4 w-4 text-ui-info" />
              <AlertTitle className="text-ui-info">Information</AlertTitle>
              <AlertDescription>Please check your email for further instructions.</AlertDescription>
            </Alert>

            <Alert className="border-ui-warning bg-ui-warning/10">
              <AlertTriangle className="h-4 w-4 text-ui-warning" />
              <AlertTitle className="text-ui-warning">Warning</AlertTitle>
              <AlertDescription>Your session will expire in 5 minutes.</AlertDescription>
            </Alert>

            <Alert className="border-ui-error bg-ui-error/10">
              <AlertCircle className="h-4 w-4 text-ui-error" />
              <AlertTitle className="text-ui-error">Error</AlertTitle>
              <AlertDescription>Something went wrong. Please try again.</AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Progress & Loading Section */}
      <section className="py-16 bg-ui-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-ui-3xl font-bold text-center mb-12 text-ui-text-primary">Progress & Loading</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 text-ui-text-primary">Upload Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-ui-text-secondary">Uploading files...</span>
                    <span className="text-ui-text-primary">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-ui-text-secondary">Processing...</span>
                    <span className="text-ui-text-primary">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-ui-text-secondary">Completed</span>
                    <span className="text-ui-text-primary">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-ui-3xl font-bold text-center mb-12 text-ui-text-primary">What People Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="p-8 text-center ui-shadow-lg">
                <div className="mb-6">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={testimonials[currentSlide].avatar} />
                    <AvatarFallback>{testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-ui-text-primary">{testimonials[currentSlide].name}</h3>
                  <p className="text-ui-text-secondary">{testimonials[currentSlide].role}</p>
                </div>
                <p className="text-ui-lg text-ui-text-primary italic">"{testimonials[currentSlide].content}"</p>
              </Card>

              {/* Navigation */}
              <div className="flex justify-center mt-6 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-4 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ui-transition ${
                      index === currentSlide ? 'bg-ui-primary' : 'bg-ui-border'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-ui-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-ui-3xl font-bold text-center mb-12 text-ui-text-primary">Tabs & Navigation</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-ui-text-primary">Product Overview</h3>
                  <p className="text-ui-text-secondary">
                    Our comprehensive UI kit provides everything you need to build modern, responsive web applications. 
                    With over 50 components and countless variations, you'll have all the building blocks for your next project.
                  </p>
                </Card>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-ui-text-primary">Key Features</h3>
                  <ul className="space-y-2 text-ui-text-secondary">
                    <li>• 50+ responsive components</li>
                    <li>• Dark mode support</li>
                    <li>• Customizable design tokens</li>
                    <li>• Accessibility compliant</li>
                    <li>• TypeScript support</li>
                  </ul>
                </Card>
              </TabsContent>
              <TabsContent value="pricing" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-ui-text-primary">Pricing Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border border-ui-border rounded-ui">
                      <h4 className="font-medium text-ui-text-primary">Basic</h4>
                      <p className="text-ui-2xl font-bold text-ui-primary">$29</p>
                    </div>
                    <div className="text-center p-4 border border-ui-primary rounded-ui bg-ui-primary/5">
                      <h4 className="font-medium text-ui-text-primary">Pro</h4>
                      <p className="text-ui-2xl font-bold text-ui-primary">$59</p>
                    </div>
                    <div className="text-center p-4 border border-ui-border rounded-ui">
                      <h4 className="font-medium text-ui-text-primary">Enterprise</h4>
                      <p className="text-ui-2xl font-bold text-ui-primary">$99</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="support" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-ui-text-primary">Support Options</h3>
                  <p className="text-ui-text-secondary mb-4">
                    We offer comprehensive support to help you get the most out of our UI kit.
                  </p>
                  <div className="space-y-2">
                    <p className="text-ui-text-secondary">📧 Email support: support@example.com</p>
                    <p className="text-ui-text-secondary">💬 Live chat: Available 24/7</p>
                    <p className="text-ui-text-secondary">📚 Documentation: Comprehensive guides</p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-ui-3xl font-bold text-center mb-12 text-ui-text-primary">Data Tables</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage your team members and their roles</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm" className="text-ui-error">Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                {/* Pagination */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-ui-text-secondary">
                    Showing 1-4 of 12 results
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-ui-primary text-white">
                      1
                    </Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-16 bg-ui-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-ui-3xl font-bold text-center mb-12 text-ui-text-primary">FAQ Section</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What's included in the UI kit?</AccordionTrigger>
                <AccordionContent>
                  Our UI kit includes over 50 responsive components, design tokens, dark mode support, 
                  and comprehensive documentation to help you build modern web applications quickly.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it compatible with React?</AccordionTrigger>
                <AccordionContent>
                  Yes! Our components are built with React and TypeScript, making them easy to integrate 
                  into your existing React applications or start new projects.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I customize the design tokens?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! The entire design system is built with CSS variables, allowing you to 
                  customize colors, spacing, typography, and more to match your brand.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer support?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide comprehensive support including email support, live chat, and 
                  detailed documentation to help you get the most out of our UI kit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Modal Example */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-ui-3xl font-bold mb-12 text-ui-text-primary">Modals & Dialogs</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-ui-primary">Open Modal</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogDescription>
                  Are you sure you want to proceed with this action? This cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-ui-error text-white">Confirm</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ui-text-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">UIKit</h3>
              <p className="text-white/80 mb-4">
                Building beautiful web experiences with our comprehensive component library.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white ui-transition">Components</a></li>
                <li><a href="#" className="text-white/80 hover:text-white ui-transition">Templates</a></li>
                <li><a href="#" className="text-white/80 hover:text-white ui-transition">Pricing</a></li>
                <li><a href="#" className="text-white/80 hover:text-white ui-transition">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white ui-transition">About</a></li>
                <li><a href="#" className="text-white/80 hover:text-white ui-transition">Blog</a></li>
                <li><a href="#" className="text-white/80 hover:text-white ui-transition">Careers</a></li>
                <li><a href="#" className="text-white/80 hover:text-white ui-transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  hello@uikit.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80">&copy; 2024 UIKit. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/80 hover:text-white ui-transition">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white ui-transition">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-white ui-transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Button
        className="fixed bottom-6 right-6 bg-ui-primary text-white ui-shadow-lg hover:scale-110 ui-transition"
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
    </div>
  );
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18 15-6-6-6 6" />
    </svg>
  );
}