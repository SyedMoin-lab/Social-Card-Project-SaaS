
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, CreditCard, Settings, LogOut, Heart, Image, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";

// Sample data for the dashboard
const recentCards = [
  { id: 1, name: "Professional Card", date: "May 12, 2023", template: "Business" },
  { id: 2, name: "Personal Brand Card", date: "Apr 25, 2023", template: "Creative" },
  { id: 3, name: "Freelance Card", date: "Mar 10, 2023", template: "Minimal" },
];

const favoriteTemplates = [
  { id: 1, name: "Executive", category: "Professional" },
  { id: 2, name: "Gradient", category: "Creative" },
  { id: 3, name: "Dark Mode", category: "Modern" },
  { id: 4, name: "Vintage", category: "Classic" },
];

const recommendedTemplates = [
  { id: 1, name: "Tech Startup", category: "Tech" },
  { id: 2, name: "Artistic", category: "Creative" },
  { id: 3, name: "Corporate", category: "Business" },
  { id: 4, name: "Freelancer", category: "Personal" },
];

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">NexCard</h1>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={logout} className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}</h1>
            <p className="text-muted-foreground">Manage your digital business cards and templates</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link to="/create">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <PlusCircle className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle>Create New Card</CardTitle>
                  <CardDescription>Design a new digital business card</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link to="/templates">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Image className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle>Browse Templates</CardTitle>
                  <CardDescription>Explore our collection of templates</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link to="/account">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <Settings className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="recent">
            <TabsList className="mb-6">
              <TabsTrigger value="recent">Recent Cards</TabsTrigger>
              <TabsTrigger value="favorites">Favorite Templates</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>

            {/* Recent Cards */}
            <TabsContent value="recent">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentCards.map((card) => (
                  <Card key={card.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>{card.name}</CardTitle>
                      <CardDescription>Template: {card.template}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-md bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <CreditCard className="w-12 h-12 text-primary/70" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="w-4 h-4 mr-1" /> {card.date}
                      </span>
                      <Button variant="outline" size="sm">Edit</Button>
                    </CardFooter>
                  </Card>
                ))}
                <Card className="border-dashed border-2 hover:border-primary hover:shadow-md transition-all flex flex-col items-center justify-center py-8">
                  <PlusCircle className="w-12 h-12 text-muted-foreground mb-4" />
                  <CardTitle className="text-muted-foreground">Create New Card</CardTitle>
                  <Link to="/create">
                    <Button className="mt-4">Get Started</Button>
                  </Link>
                </Card>
              </div>
            </TabsContent>

            {/* Favorite Templates */}
            <TabsContent value="favorites">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {favoriteTemplates.map((template) => (
                  <Card key={template.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>{template.name}</CardTitle>
                      <CardDescription>{template.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-md bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <Image className="w-12 h-12 text-primary/70" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" size="sm" className="text-red-500">
                        <Heart className="w-4 h-4 mr-1 fill-current" /> Favorite
                      </Button>
                      <Button variant="outline" size="sm">Use</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Recommended Templates */}
            <TabsContent value="recommended">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {recommendedTemplates.map((template) => (
                  <Card key={template.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>{template.name}</CardTitle>
                      <CardDescription>{template.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-md bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <Image className="w-12 h-12 text-primary/70" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4 mr-1" /> Add
                      </Button>
                      <Button variant="outline" size="sm">Use</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
