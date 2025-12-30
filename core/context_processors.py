import os

def export_env_vars(request):
    return {
        'ENV_VARS': {
            'APP_NAME': os.getenv('APP_NAME', 'Axemys Pay'),
        }
    }