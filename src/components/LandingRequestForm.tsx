
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  vesselName: z.string().min(1, "Vessel name is required"),
  vesselType: z.string().min(1, "Vessel type is required"),
  vesselLength: z.string().min(1, "Vessel length is required"),
  vesselBeam: z.string().min(1, "Vessel beam is required"),
  vesselDraft: z.string().min(1, "Vessel draft is required"),
  grossTonnage: z.string().min(1, "Gross tonnage is required"),
  netTonnage: z.string().min(1, "Net tonnage is required"),
  ownerName: z.string().min(1, "Owner name is required"),
  ownerAddress: z.string().min(1, "Owner address is required"),
  ownerPhone: z.string().min(1, "Owner phone is required"),
  agentName: z.string().min(1, "Agent name is required"),
  agentAddress: z.string().min(1, "Agent address is required"),
  agentPhone: z.string().min(1, "Agent phone is required"),
  portOfDeparture: z.string().min(1, "Port of departure is required"),
  lastPortOfCall: z.string().min(1, "Last port of call is required"),
  estimatedArrival: z.string().min(1, "Estimated arrival is required"),
  estimatedDeparture: z.string().min(1, "Estimated departure is required"),
  purposeOfCall: z.string().min(1, "Purpose of call is required"),
  cargoDescription: z.string().optional(),
  specialRequirements: z.string().optional(),
});

const LandingRequestForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vesselName: "",
      vesselType: "",
      vesselLength: "",
      vesselBeam: "",
      vesselDraft: "",
      grossTonnage: "",
      netTonnage: "",
      ownerName: "",
      ownerAddress: "",
      ownerPhone: "",
      agentName: "",
      agentAddress: "",
      agentPhone: "",
      portOfDeparture: "",
      lastPortOfCall: "",
      estimatedArrival: "",
      estimatedDeparture: "",
      purposeOfCall: "",
      cargoDescription: "",
      specialRequirements: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Landing request submitted:", values);
    toast({
      title: "Landing Request Submitted",
      description: "Your landing request has been submitted successfully. We will contact you soon.",
    });
    form.reset();
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-blue-900">
          Vessel Landing Request Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="vesselName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vessel Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vesselType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vessel Type</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="vesselLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length (ft)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vesselBeam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Beam (ft)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vesselDraft"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Draft (ft)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="grossTonnage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gross Tonnage</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="netTonnage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Net Tonnage</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Owner Information</h3>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="ownerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ownerAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner Address</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ownerPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Agent Information</h3>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="agentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agent Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agentAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agent Address</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agentPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agent Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Voyage Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="portOfDeparture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Port of Departure</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastPortOfCall"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Port of Call</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="estimatedArrival"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Arrival</FormLabel>
                      <FormControl>
                        <Input type="datetime-local" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="estimatedDeparture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Departure</FormLabel>
                      <FormControl>
                        <Input type="datetime-local" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="purposeOfCall"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purpose of Call</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cargoDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="specialRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requirements (Optional)</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button type="submit" className="px-8 py-2 bg-blue-600 hover:bg-blue-700">
                Submit Landing Request
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LandingRequestForm;
