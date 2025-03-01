
import { Github, Linkedin, Globe, Phone, Mail, Download, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import { useRef } from "react";

type SocialCardPreviewProps = {
  data: {
    name: string;
    phone?: string;
    email: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
    photoUrl: string;
  };
};

export function SocialCardPreview({ data }: SocialCardPreviewProps) {
  const { toast } = useToast();
  const cardRef = useRef<HTMLDivElement>(null);

  const generateLink = () => {
    // In a real application, this would create a unique link on the server
    // For this demo, we'll create a mock link and copy it to clipboard
    const mockLink = `https://socialcard.app/s/${Math.random().toString(36).substring(2, 10)}`;
    
    navigator.clipboard.writeText(mockLink);
    toast({
      title: "Link copied to clipboard",
      description: "Share this link with others to show your social card",
    });
  };

  const downloadCard = async (format: 'png' | 'jpg') => {
    if (!cardRef.current) return;
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
      });
      
      const imageType = format === 'png' ? 'image/png' : 'image/jpeg';
      const imageUrl = canvas.toDataURL(imageType);
      
      const link = document.createElement('a');
      link.download = `social-card.${format}`;
      link.href = imageUrl;
      link.click();
      
      toast({
        title: "Download started",
        description: `Your social card is being downloaded as ${format.toUpperCase()}`,
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "There was an error generating your social card",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div ref={cardRef} className="social-card">
        <div className="social-card-glow"></div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left">
            {/* Profile Photo */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              {data.photoUrl ? (
                <img 
                  src={data.photoUrl} 
                  alt={data.name || "Profile"} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                  <span className="text-5xl font-bold">{data.name?.charAt(0) || "?"}</span>
                </div>
              )}
            </div>
            
            {/* User Information */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{data.name || "Your Name"}</h2>
              
              {/* Contact Details */}
              <div className="space-y-2 mb-4">
                {data.email && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-sm">
                    <Mail size={16} className="text-muted-foreground" />
                    <span>{data.email}</span>
                  </div>
                )}
                
                {data.phone && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-sm">
                    <Phone size={16} className="text-muted-foreground" />
                    <span>{data.phone}</span>
                  </div>
                )}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {data.linkedin && (
                  <a 
                    href={data.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                
                {data.github && (
                  <a 
                    href={data.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-900 dark:bg-gray-700 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Github size={18} />
                  </a>
                )}
                
                {data.portfolio && (
                  <a 
                    href={data.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-aragon flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Globe size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Share Your Card</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={generateLink}
          >
            <Link2 size={16} />
            <span>Generate Share Link</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => downloadCard('png')}
          >
            <Download size={16} />
            <span>Download as PNG</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2 sm:col-span-2"
            onClick={() => downloadCard('jpg')}
          >
            <Download size={16} />
            <span>Download as JPG</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
