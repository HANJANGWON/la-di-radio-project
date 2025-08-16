import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  Input, 
  Badge, 
  Heading, 
  Text, 
  Code,
  theme 
} from '@/components/ui';

const ComponentsPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const containerStyle = {
    minHeight: '100vh',
    background: theme.colors.background.primary,
    fontFamily: theme.typography.fontFamilies.primary,
    color: theme.colors.text.primary,
    padding: '40px 24px',
  };

  const maxWidthStyle = {
    maxWidth: theme.spacing.layout.pageMaxWidth,
    margin: '0 auto',
  };

  const sectionStyle = {
    marginBottom: '48px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '24px',
  };

  const flexStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '12px',
    marginTop: '16px',
  };

  return (
    <div style={containerStyle}>
      <div style={maxWidthStyle}>
        {/* Header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <Heading level={1} style={{ marginBottom: '16px' }}>
            Component Library
          </Heading>
          <Text variant="secondary" size="large">
            Linear-inspired UI components built with React and TypeScript
          </Text>
        </div>

        {/* Typography Section */}
        <section style={sectionStyle}>
          <Heading level={2} style={{ marginBottom: '24px' }}>
            Typography
          </Heading>
          
          <div style={{ marginBottom: '32px' }}>
            <Heading level={3} style={{ marginBottom: '16px' }}>Headings</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Heading level={4}>Heading 4</Heading>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <Heading level={3} style={{ marginBottom: '16px' }}>Text Variants</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Text variant="primary">Primary text - most important content</Text>
              <Text variant="secondary">Secondary text - supporting content</Text>
              <Text variant="muted">Muted text - less important information</Text>
              <Text variant="subtle">Subtle text - minimal emphasis</Text>
            </div>
          </div>

          <div>
            <Heading level={3} style={{ marginBottom: '16px' }}>Code</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <Text variant="secondary" style={{ marginBottom: '8px' }}>Inline code:</Text>
                <Text>Use the <Code inline>useState</Code> hook for state management.</Text>
              </div>
              <div>
                <Text variant="secondary" style={{ marginBottom: '8px' }}>Code block:</Text>
                <Code>{`const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>
);`}</Code>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section style={sectionStyle}>
          <Heading level={2} style={{ marginBottom: '24px' }}>
            Buttons
          </Heading>
          
          <div style={{ marginBottom: '32px' }}>
            <Heading level={3} style={{ marginBottom: '16px' }}>Variants</Heading>
            <div style={flexStyle}>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <Heading level={3} style={{ marginBottom: '16px' }}>Sizes</Heading>
            <div style={flexStyle}>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
          </div>

          <div>
            <Heading level={3} style={{ marginBottom: '16px' }}>States</Heading>
            <div style={flexStyle}>
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section style={sectionStyle}>
          <Heading level={2} style={{ marginBottom: '24px' }}>
            Cards
          </Heading>
          
          <div style={gridStyle}>
            <Card>
              <Card.Header>
                <Heading level={3}>Default Card</Heading>
                <Text variant="muted">This is a standard card with default styling</Text>
              </Card.Header>
              <Card.Content>
                <Text>
                  Cards are flexible containers that can hold various types of content. 
                  They provide a clean way to group related information.
                </Text>
              </Card.Content>
              <Card.Footer>
                <Button variant="ghost">Cancel</Button>
                <Button>Action</Button>
              </Card.Footer>
            </Card>

            <Card variant="elevated">
              <Card.Header>
                <Heading level={3}>Elevated Card</Heading>
                <Text variant="muted">This card has enhanced shadow for more prominence</Text>
              </Card.Header>
              <Card.Content>
                <Text>
                  Elevated cards are perfect for highlighting important content 
                  or creating visual hierarchy in your interface.
                </Text>
              </Card.Content>
            </Card>

            <Card variant="outlined" padding="large">
              <Heading level={3} style={{ marginBottom: '12px' }}>
                Outlined Card
              </Heading>
              <Text>
                Simple outlined card with large padding. Great for forms or 
                when you need a subtle container without heavy shadows.
              </Text>
            </Card>
          </div>
        </section>

        {/* Form Elements Section */}
        <section style={sectionStyle}>
          <Heading level={2} style={{ marginBottom: '24px' }}>
            Form Elements
          </Heading>
          
          <div style={gridStyle}>
            <Card>
              <Card.Header>
                <Heading level={3}>Input Fields</Heading>
              </Card.Header>
              <Card.Content>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    hint="Must be at least 8 characters"
                  />
                  <Input
                    label="Error State"
                    type="text"
                    placeholder="This field has an error"
                    error="This field is required"
                  />
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Heading level={3}>Textarea & Select</Heading>
              </Card.Header>
              <Card.Content>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Input.Textarea
                    label="Message"
                    placeholder="Enter your message"
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    rows={3}
                  />
                  <Input.Select
                    label="Country"
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                  >
                    <option value="">Select a country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </Input.Select>
                </div>
              </Card.Content>
            </Card>
          </div>
        </section>

        {/* Badges Section */}
        <section style={sectionStyle}>
          <Heading level={2} style={{ marginBottom: '24px' }}>
            Badges & Status
          </Heading>
          
          <div style={{ marginBottom: '32px' }}>
            <Heading level={3} style={{ marginBottom: '16px' }}>Badge Variants</Heading>
            <div style={flexStyle}>
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <Heading level={3} style={{ marginBottom: '16px' }}>Badge Sizes</Heading>
            <div style={flexStyle}>
              <Badge size="small">Small</Badge>
              <Badge size="medium">Medium</Badge>
              <Badge size="large">Large</Badge>
            </div>
          </div>

          <div>
            <Heading level={3} style={{ marginBottom: '16px' }}>Status Indicators</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <Badge.Status status="online" showLabel />
                <Badge.Status status="offline" showLabel />
                <Badge.Status status="busy" showLabel />
                <Badge.Status status="away" showLabel />
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Badge.Status status="online" size="small" />
                <Badge.Status status="online" size="medium" />
                <Badge.Status status="online" size="large" />
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
        <section style={sectionStyle}>
          <Heading level={2} style={{ marginBottom: '24px' }}>
            Color Palette
          </Heading>
          
          <div style={gridStyle}>
            <Card>
              <Card.Header>
                <Heading level={3}>Accent Colors</Heading>
              </Card.Header>
              <Card.Content>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  {Object.entries(theme.colors.accent).map(([name, color]) => (
                    <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div 
                        style={{ 
                          width: '20px', 
                          height: '20px', 
                          backgroundColor: color, 
                          borderRadius: '4px',
                          border: `1px solid ${theme.colors.semantic.border}`
                        }} 
                      />
                      <Text variant="secondary" style={{ textTransform: 'capitalize' }}>
                        {name}
                      </Text>
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Heading level={3}>Background Colors</Heading>
              </Card.Header>
              <Card.Content>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Object.entries(theme.colors.background).map(([name, color]) => (
                    <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div 
                        style={{ 
                          width: '20px', 
                          height: '20px', 
                          backgroundColor: color, 
                          borderRadius: '4px',
                          border: `1px solid ${theme.colors.semantic.border}`
                        }} 
                      />
                      <Text variant="secondary" style={{ textTransform: 'capitalize' }}>
                        {name}
                      </Text>
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentsPage;