import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 0,
      icon: '🔷',
      title: 'Advanced RAG Pipeline',
      subtitle: 'with Vector Search & LLM Orchestration',
      fullTitle: 'Advanced RAG Pipeline with Vector Search & LLM Orchestration',
      description: 'Production-grade Retrieval-Augmented Generation system with semantic chunking, hybrid search, and multi-agent workflows',
      tags: ['RAG', 'Vector DB', 'LangChain', 'OpenAI', 'Pinecone', 'Redis'],
      codePreview: `// Advanced RAG Pipeline with Multi-Agent Orchestration
import { OpenAI } from "openai";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "redis";
import { z } from "zod";

interface RAGConfig {
  vectorStore: PineconeStore;
  llm: OpenAI;
  cache: ReturnType<typeof createClient>;
  embeddingModel: OpenAIEmbeddings;
}

class AdvancedRAGPipeline {
  private config: RAGConfig;
  private semanticRouter: SemanticRouter;
  private queryRewriter: QueryRewriter;

  constructor(config: RAGConfig) {
    this.config = config;
    this.semanticRouter = new SemanticRouter(config.embeddingModel);
    this.queryRewriter = new QueryRewriter(config.llm);
  }

  async processQuery(query: string, context?: AgentContext): Promise<RAGResponse> {
    // Multi-step query processing with semantic routing
    const routingResult = await this.semanticRouter.route(query);
    const rewrittenQueries = await this.queryRewriter.expandQuery(query, routingResult);
    
    // Parallel retrieval with fusion scoring
    const retrievalPromises = rewrittenQueries.map(async (q) => {
      const cacheKey = await this.generateCacheKey(q, context);
      const cached = await this.config.cache.get(cacheKey);
      if (cached) return JSON.parse(cached);
      
      const results = await this.config.vectorStore.similaritySearch(q, 10);
      await this.config.cache.set(cacheKey, JSON.stringify(results), 'EX', 3600);
      return results;
    });
    
    const allResults = await Promise.all(retrievalPromises);
    const fusedResults = this.fusionRanking(allResults);
    
    // Generate response with context
    const response = await this.generateResponse(query, fusedResults, context);
    return response;
  }

  private fusionRanking(results: any[][]): any[] {
    // Implement reciprocal rank fusion
    const scoreMap = new Map();
    
    results.forEach((resultSet, setIndex) => {
      resultSet.forEach((doc, rank) => {
        const key = doc.metadata.id;
        const score = 1 / (rank + 60);
        scoreMap.set(key, (scoreMap.get(key) || 0) + score);
      });
    });
    
    return Array.from(scoreMap.entries())
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([id]) => results.flat().find(doc => doc.metadata.id === id));
  }

  private async generateResponse(query: string, docs: any[], context?: AgentContext) {
    const prompt = this.buildPrompt(query, docs, context);
    const response = await this.config.llm.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.1,
    });
    
    return {
      answer: response.choices[0].message.content,
      sources: docs.map(doc => doc.metadata),
      confidence: this.calculateConfidence(docs)
    };
  }
}`
    },
    {
      id: 1,
      icon: '🐍',
      title: 'Distributed ML Training',
      subtitle: 'with Kubernetes & Ray',
      fullTitle: 'Distributed ML Training with Kubernetes & Ray',
      description: 'Scalable machine learning pipeline with distributed training, hyperparameter optimization, and model serving',
      tags: ['Python', 'Kubernetes', 'Ray', 'MLflow', 'Docker', 'TensorFlow'],
      codePreview: `# Distributed ML Training with Ray and Kubernetes
import ray
from ray import tune
from ray.train import Trainer
from ray.train.torch import TorchTrainer
import torch
import torch.nn as nn
from torch.utils.data import DataLoader
import kubernetes
from mlflow import log_metric, log_param, log_artifact

@ray.remote(num_gpus=1)
class DistributedTrainer:
    def __init__(self, config):
        self.config = config
        self.model = self.build_model()
        self.optimizer = torch.optim.Adam(self.model.parameters(), lr=config["lr"])
        
    def build_model(self):
        return nn.Sequential(
            nn.Linear(self.config["input_size"], 512),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(512, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, self.config["num_classes"])
        )
    
    def train_epoch(self, dataloader):
        self.model.train()
        total_loss = 0
        
        for batch_idx, (data, target) in enumerate(dataloader):
            self.optimizer.zero_grad()
            output = self.model(data)
            loss = nn.CrossEntropyLoss()(output, target)
            loss.backward()
            self.optimizer.step()
            total_loss += loss.item()
            
        return total_loss / len(dataloader)

def hyperparameter_search():
    config = {
        "lr": tune.loguniform(1e-4, 1e-1),
        "batch_size": tune.choice([32, 64, 128]),
        "hidden_size": tune.choice([256, 512, 1024]),
    }
    
    analysis = tune.run(
        train_model,
        config=config,
        num_samples=20,
        resources_per_trial={"cpu": 2, "gpu": 1}
    )
    
    return analysis.best_config

def deploy_to_kubernetes():
    from kubernetes import client, config
    
    config.load_incluster_config()
    v1 = client.AppsV1Api()
    
    deployment = client.V1Deployment(
        metadata=client.V1ObjectMeta(name="ml-model-server"),
        spec=client.V1DeploymentSpec(
            replicas=3,
            selector=client.V1LabelSelector(
                match_labels={"app": "ml-model"}
            ),
            template=client.V1PodTemplateSpec(
                metadata=client.V1ObjectMeta(
                    labels={"app": "ml-model"}
                ),
                spec=client.V1PodSpec(
                    containers=[
                        client.V1Container(
                            name="model-server",
                            image="ml-model:latest",
                            ports=[client.V1ContainerPort(container_port=8080)],
                            resources=client.V1ResourceRequirements(
                                requests={"cpu": "500m", "memory": "1Gi"},
                                limits={"cpu": "2", "memory": "4Gi"}
                            )
                        )
                    ]
                )
            )
        )
    )
    
    v1.create_namespaced_deployment(namespace="default", body=deployment)`
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Event-Driven Microservices',
      subtitle: 'with CQRS & Event Sourcing',
      fullTitle: 'Event-Driven Microservices with CQRS & Event Sourcing',
      description: 'Scalable microservices architecture using CQRS, Event Sourcing, and distributed event streaming with Kafka',
      tags: ['Node.js', 'Kafka', 'MongoDB', 'Redis', 'Docker', 'CQRS'],
      codePreview: `// Event-Driven Microservices with CQRS & Event Sourcing
import { EventStore } from './event-store';
import { CommandHandler } from './command-handler';
import { EventPublisher } from './event-publisher';
import { Kafka } from 'kafkajs';

interface Event {
  id: string;
  aggregateId: string;
  type: string;
  data: any;
  timestamp: Date;
  version: number;
}

interface Command {
  id: string;
  type: string;
  aggregateId: string;
  data: any;
}

class EventSourcingAggregate {
  private events: Event[] = [];
  private version = 0;
  
  constructor(private id: string) {}
  
  applyEvent(event: Event): void {
    this.events.push(event);
    this.version = event.version;
    this.when(event);
  }
  
  protected when(event: Event): void {
    // Override in concrete aggregates
  }
  
  getUncommittedEvents(): Event[] {
    return this.events;
  }
  
  markEventsAsCommitted(): void {
    this.events = [];
  }
}

class OrderAggregate extends EventSourcingAggregate {
  private status: string = 'pending';
  private items: any[] = [];
  private total: number = 0;
  
  createOrder(items: any[]): void {
    const event: Event = {
      id: generateId(),
      aggregateId: this.id,
      type: 'OrderCreated',
      data: { items },
      timestamp: new Date(),
      version: this.version + 1
    };
    
    this.applyEvent(event);
  }
  
  protected when(event: Event): void {
    switch (event.type) {
      case 'OrderCreated':
        this.status = 'created';
        this.items = event.data.items;
        this.total = this.calculateTotal(event.data.items);
        break;
      case 'OrderConfirmed':
        this.status = 'confirmed';
        break;
      case 'OrderShipped':
        this.status = 'shipped';
        break;
    }
  }
  
  private calculateTotal(items: any[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}

class EventSourcingRepository {
  constructor(
    private eventStore: EventStore,
    private eventPublisher: EventPublisher
  ) {}
  
  async save(aggregate: EventSourcingAggregate): Promise<void> {
    const events = aggregate.getUncommittedEvents();
    
    await this.eventStore.saveEvents(aggregate.id, events);
    
    for (const event of events) {
      await this.eventPublisher.publish(event);
    }
    
    aggregate.markEventsAsCommitted();
  }
  
  async getById(id: string): Promise<OrderAggregate> {
    const events = await this.eventStore.getEvents(id);
    const aggregate = new OrderAggregate(id);
    
    events.forEach(event => aggregate.applyEvent(event));
    
    return aggregate;
  }
}`
    },
    {
      id: 3,
      icon: '🖥️',
      title: 'GPU-Accelerated CV Pipeline',
      subtitle: 'High-performance computer vision',
      fullTitle: 'GPU-Accelerated Computer Vision Pipeline',
      description: 'High-performance computer vision system with CUDA acceleration, real-time object detection, and distributed processing',
      tags: ['Python', 'CUDA', 'OpenCV', 'TensorRT', 'FastAPI', 'PyTorch'],
      codePreview: `# GPU-Accelerated Computer Vision Pipeline
import cv2
import numpy as np
import torch
import tensorrt as trt
import pycuda.driver as cuda
import pycuda.autoinit
from fastapi import FastAPI, UploadFile
from concurrent.futures import ThreadPoolExecutor
import asyncio

class TensorRTInference:
    def __init__(self, engine_path: str):
        self.logger = trt.Logger(trt.Logger.WARNING)
        self.runtime = trt.Runtime(self.logger)
        self.engine = self.load_engine(engine_path)
        self.context = self.engine.create_execution_context()
        
        # Allocate GPU memory
        self.inputs, self.outputs, self.bindings = self.allocate_buffers()
        
    def load_engine(self, engine_path: str):
        with open(engine_path, 'rb') as f:
            return self.runtime.deserialize_cuda_engine(f.read())
    
    def allocate_buffers(self):
        inputs = []
        outputs = []
        bindings = []
        
        for binding in self.engine:
            size = trt.volume(self.engine.get_binding_shape(binding))
            dtype = trt.nptype(self.engine.get_binding_dtype(binding))
            
            # Allocate host and device buffers
            host_mem = cuda.pagelocked_empty(size, dtype)
            device_mem = cuda.mem_alloc(host_mem.nbytes)
            
            bindings.append(int(device_mem))
            
            if self.engine.binding_is_input(binding):
                inputs.append({'host': host_mem, 'device': device_mem})
            else:
                outputs.append({'host': host_mem, 'device': device_mem})
                
        return inputs, outputs, bindings
    
    def infer(self, input_data: np.ndarray) -> np.ndarray:
        # Copy input data to GPU
        np.copyto(self.inputs[0]['host'], input_data.ravel())
        cuda.memcpy_htod(self.inputs[0]['device'], self.inputs[0]['host'])
        
        # Run inference
        self.context.execute_v2(bindings=self.bindings)
        
        # Copy output data from GPU
        cuda.memcpy_dtoh(self.outputs[0]['host'], self.outputs[0]['device'])
        
        return self.outputs[0]['host']

class ObjectDetectionPipeline:
    def __init__(self, model_path: str, confidence_threshold: float = 0.5):
        self.model = TensorRTInference(model_path)
        self.confidence_threshold = confidence_threshold
        self.class_names = self.load_class_names()
        
    def preprocess(self, image: np.ndarray) -> np.ndarray:
        # Resize and normalize
        resized = cv2.resize(image, (640, 640))
        normalized = resized.astype(np.float32) / 255.0
        
        # Convert BGR to RGB and add batch dimension
        rgb = cv2.cvtColor(normalized, cv2.COLOR_BGR2RGB)
        return np.transpose(rgb, (2, 0, 1))[np.newaxis, ...]
    
    def postprocess(self, predictions: np.ndarray, original_shape: tuple) -> list:
        detections = []
        
        for detection in predictions:
            confidence = detection[4]
            if confidence > self.confidence_threshold:
                x, y, w, h = detection[:4]
                class_id = int(np.argmax(detection[5:]))
                
                # Scale coordinates back to original image size
                x_scale = original_shape[1] / 640
                y_scale = original_shape[0] / 640
                
                detections.append({
                    'bbox': [int(x * x_scale), int(y * y_scale), 
                            int(w * x_scale), int(h * y_scale)],
                    'confidence': float(confidence),
                    'class_id': class_id,
                    'class_name': self.class_names[class_id]
                })
                
        return detections
    
    async def detect_objects(self, image: np.ndarray) -> list:
        # Preprocess on CPU
        input_tensor = self.preprocess(image)
        
        # Run inference on GPU
        loop = asyncio.get_event_loop()
        with ThreadPoolExecutor() as executor:
            predictions = await loop.run_in_executor(
                executor, self.model.infer, input_tensor
            )
        
        # Postprocess results
        return self.postprocess(predictions, image.shape)

# FastAPI application
app = FastAPI(title="GPU-Accelerated CV Pipeline")
pipeline = ObjectDetectionPipeline("model.trt")

@app.post("/detect")
async def detect_objects(file: UploadFile):
    # Read and decode image
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    # Run detection
    detections = await pipeline.detect_objects(image)
    
    return {"detections": detections, "count": len(detections)}`
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <section className="py-20 px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Code <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Explore my coding style through these snippets.
          </p>
        </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
          {/* Left Panel - Project Cards */}
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-1 gap-4 h-full">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`group cursor-pointer bg-gray-900/50 backdrop-blur-sm border rounded-xl p-4 transition-all duration-300 transform hover:scale-[1.02] flex-1 flex items-center ${
                    selectedProject === index 
                      ? 'border-purple-500/70 bg-purple-500/10' 
                      : 'border-gray-800 hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-4 w-full">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 ${
                      selectedProject === index 
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                        : 'bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500'
                    }`}>
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold mb-1 transition-colors ${
                        selectedProject === index 
                          ? 'text-purple-300' 
                          : 'text-white group-hover:text-purple-300'
                      }`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Selected Project Details */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-800 flex-shrink-0">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentProject.fullTitle}
                </h3>
                <button className="p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {currentProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Code Editor */}
            <div className="bg-gray-950/90 flex-1 overflow-hidden flex flex-col">
              {/* Editor tabs */}
              <div className="flex items-center px-4 py-2 border-b border-gray-800/50 bg-gray-900/50 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">
                  {currentProject.title.toLowerCase().replace(/\s+/g, '-')}.{currentProject.id === 1 ? 'py' : currentProject.id === 2 ? 'ts' : currentProject.id === 3 ? 'py' : 'ts'}
                </div>
              </div>
              
              {/* Code content */}
              <div className="flex-1 overflow-auto">
                <div className="flex h-full">
                  {/* Line numbers */}
                  <div className="bg-gray-900/30 px-3 py-4 text-xs text-gray-500 select-none border-r border-gray-800/50 flex-shrink-0">
                    {currentProject.codePreview.split('\n').map((_, index) => (
                      <div key={index} className="leading-6 h-6">
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  
                  {/* Code */}
                  <div className="flex-1 p-4 overflow-auto">
                    <pre className="text-sm leading-6">
                      <code className="text-gray-300">
                        {currentProject.codePreview.split('\n').map((line, index) => (
                          <div key={index} className="min-h-[24px]">
                            {line.split(/(\bimport\b|\bfrom\b|\bclass\b|\binterface\b|\basync\b|\bawait\b|\bconst\b|\bprivate\b|\bconstructor\b|\bnew\b|\bdef\b|\bif\b|\belse\b|\bfor\b|\bwhile\b|\breturn\b)/).map((part, partIndex) => {
                              if (['import', 'from', 'class', 'interface', 'async', 'await', 'const', 'private', 'constructor', 'new', 'def', 'if', 'else', 'for', 'while', 'return'].includes(part)) {
                                return <span key={partIndex} className="text-purple-400">{part}</span>;
                              }
                              if (part.match(/^"[^"]*"$/) || part.match(/^'[^']*'$/)) {
                                return <span key={partIndex} className="text-green-400">{part}</span>;
                              }
                              if (part.match(/^\/\/.*/)) {
                                return <span key={partIndex} className="text-gray-500">{part}</span>;
                              }
                              if (part.match(/^#.*/)) {
                                return <span key={partIndex} className="text-gray-500">{part}</span>;
                              }
                              if (part.match(/^[A-Z][a-zA-Z]*$/)) {
                                return <span key={partIndex} className="text-blue-400">{part}</span>;
                              }
                              return <span key={partIndex}>{part}</span>;
                            })}
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;