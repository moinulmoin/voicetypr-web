const origin = 'https://voicetypr.com';

const apiCatalog = {
  linkset: [
    {
      anchor: `${origin}/.well-known/api-catalog`,
      item: [
        {
          href: `${origin}/api/v1/trial/check`,
          title: 'Trial status API',
          type: 'application/json',
        },
        {
          href: `${origin}/api/v1/license/activate`,
          title: 'License activation API',
          type: 'application/json',
        },
        {
          href: `${origin}/api/v1/license/validate`,
          title: 'License validation API',
          type: 'application/json',
        },
        {
          href: `${origin}/api/v1/license/deactivate`,
          title: 'License deactivation API',
          type: 'application/json',
        },
      ],
      'service-doc': [
        {
          href: `${origin}/help`,
          title: 'VoiceTypr help center',
          type: 'text/html',
        },
      ],
      describedby: [
        {
          href: `${origin}/llms.txt`,
          title: 'VoiceTypr product context',
          type: 'text/markdown',
        },
        {
          href: `${origin}/pricing.md`,
          title: 'VoiceTypr pricing context',
          type: 'text/markdown',
        },
        {
          href: `${origin}/accessibility.md`,
          title: 'VoiceTypr accessibility context',
          type: 'text/markdown',
        },
        {
          href: `${origin}/windows-dictation.md`,
          title: 'VoiceTypr Windows dictation context',
          type: 'text/markdown',
        },
      ],
    },
  ],
};


export function GET() {
  return Response.json(apiCatalog, {
    headers: {
      'Content-Type': 'application/linkset+json; charset=utf-8',
      Link: `</.well-known/api-catalog>; rel="self"; type="application/linkset+json"`,
    },
  });
}
