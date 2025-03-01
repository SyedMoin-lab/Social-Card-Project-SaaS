
import { useState, ChangeEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, Github, Linkedin, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  linkedin: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  github: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

type SocialCardFormProps = {
  onUpdate: (values: FormValues & { photoUrl: string }) => void;
};

export function SocialCardForm({ onUpdate }: SocialCardFormProps) {
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      portfolio: "",
    },
  });

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 5MB",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        setPhotoUrl(result);
        
        // Update the parent component with the form values and photo
        onUpdate({
          ...form.getValues(),
          photoUrl: result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values: FormValues) => {
    if (!photoUrl) {
      toast({
        title: "Photo required",
        description: "Please upload a profile photo",
        variant: "destructive",
      });
      return;
    }

    // Update the parent component with the form values and photo
    onUpdate({
      ...values,
      photoUrl,
    });

    toast({
      title: "Card updated",
      description: "Your social card has been updated",
    });
  };

  // Update the parent on any field change
  const handleFieldChange = () => {
    const currentValues = form.getValues();
    onUpdate({
      ...currentValues,
      photoUrl,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Photo Upload */}
        <div className="space-y-2">
          <FormLabel>Profile Photo</FormLabel>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-border">
              {photoPreview ? (
                <img 
                  src={photoPreview} 
                  alt="Profile preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <Upload className="w-8 h-8 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1">
              <Input
                type="file"
                accept="image/*"
                id="photo"
                onChange={handlePhotoChange}
                className="cursor-pointer"
              />
              <p className="text-xs text-muted-foreground mt-1">
                JPG, PNG or GIF. Max 5MB.
              </p>
            </div>
          </div>
        </div>

        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
                  {...field} 
                  onChange={(e) => {
                    field.onChange(e);
                    handleFieldChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="+1 (555) 123-4567" 
                  {...field} 
                  onChange={(e) => {
                    field.onChange(e);
                    handleFieldChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input 
                  placeholder="johndoe@example.com" 
                  {...field} 
                  onChange={(e) => {
                    field.onChange(e);
                    handleFieldChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* LinkedIn */}
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                <Linkedin size={16} /> LinkedIn URL
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="https://linkedin.com/in/username" 
                  {...field} 
                  onChange={(e) => {
                    field.onChange(e);
                    handleFieldChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* GitHub */}
        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                <Github size={16} /> GitHub URL
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="https://github.com/username" 
                  {...field} 
                  onChange={(e) => {
                    field.onChange(e);
                    handleFieldChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Portfolio */}
        <FormField
          control={form.control}
          name="portfolio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                <Globe size={16} /> Portfolio URL
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="https://yourportfolio.com" 
                  {...field} 
                  onChange={(e) => {
                    field.onChange(e);
                    handleFieldChange();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Save Card</Button>
      </form>
    </Form>
  );
}
